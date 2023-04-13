from flask import Flask, render_template, flash, request, redirect, url_for
from plantplanner import app, db
from plantplanner.models import Users, Plants
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_wtf import FlaskForm
from flask_login import UserMixin, login_user, LoginManager
from flask_login import login_required, logout_user, current_user
from plantplanner.webforms import LoginForm, PlantForm, UserForm, PasswordForm
from plantplanner.webforms import NamerForm, SearchForm
from flask_ckeditor import CKEditor
from werkzeug.utils import secure_filename
import uuid as uuid
import os


# Create User Account Page
@app.route('/account', methods=['GET', 'POST'])
@login_required
def account():
    form = UserForm()
    id = current_user.id
    name_to_update = Users.query.get_or_404(id)
    if request.method == "POST":
        name_to_update.name = request.form['name']
        name_to_update.email = request.form['email']
        name_to_update.username = request.form['username']
        name_to_update.about_author = request.form['about_author']
        name_to_update.profile_pic = request.files['profile_pic']
        # Grab Image Name
        pic_filename = secure_filename(name_to_update.profile_pic.filename)
        # Set UUID
        pic_name = str(uuid.uuid1()) + "_" + pic_filename
        # Save That Image
        saver = request.files['profile_pic']
        # Change it to a string to save to db
        name_to_update.profile_pic = pic_name
        try:
            db.session.commit()
            saver.save(os.path.join(app.config['UPLOAD_FOLDER'], pic_name))
            flash("User Updated Successfully!")
            return render_template(
                "account.html",
                form=form,
                name_to_update=name_to_update,
                page_instructions="You can make changes to your account here",
                page_title="My Account")
        except:
            flash("Error! Looks like there was a problem...try again!")
            return render_template(
                "account.html",
                form=form,
                name_to_update=name_to_update,
                page_instructions="You can make changes to your account here",
                page_title="My Account"
                )
    else:
        return render_template(
            "account.html",
            form=form,
            name_to_update=name_to_update,
            id=id,
            page_instructions="You can make changes to your account here",
            page_title="My Account")
    return render_template(
        'account.html',
        page_instructions="You can make changes to your account here",
        page_title="My Account")


# Add Post Page
@app.route('/add-plant', methods=['GET', 'POST'])
@login_required
def add_plant():
    form = PlantForm()
    if form.validate_on_submit():
        poster = current_user.id
        plant = Plants(
            common_name=form.common_name.data,
            notes=form.notes.data,
            pic_url=form.pic_url.data,
            poster_id=poster,
            latin_name=form.latin_name.data,
            water_interval=form.water_interval.data,
            last_watered_date=form.last_watered_date.data
            )
        # Clear the form
        form.common_name.data = ''
        form.notes.data = ''
        form.pic_url.data = ''
        form.latin_name.data = ''
        form.water_interval.data = ''
        form.last_watered_date.data = ''

        # Add plant to database
        db.session.add(plant)
        db.session.commit()

        # Return a message
        flash("Post submitted successfully")
    else:
        flash("Post failed to be submitted")
    # Redirect to the webpage
    return render_template(
        "add_plant.html",
        form=form,
        page_instructions="Answer the questions and click 'Submit' to add a plant",
        page_title="Add a Plant")


@app.route('/user/add', methods=['GET', 'POST'])
def add_user():
    name = None
    form = UserForm()
    # Validate Form
    if form.validate_on_submit():
        user = Users.query.filter_by(email=form.email.data).first()
        if user is None:
            # Hash the password
            hashed_pw = generate_password_hash(
                form.password_hash.data, "sha256"
                )
            user = Users(
                name=form.name.data,
                username=form.username.data,
                email=form.email.data,
                password_hash=hashed_pw)
            db.session.add(user)
            db.session.commit()
        name = form.name.data
        form.name.data = ''  # clears the form
        form.username.data = ''  # clears the form
        form.email.data = ''  # clears the form
        form.password_hash.data = ''  # clears the form
        flash("User Added Successfully!")
    our_users = Users.query.order_by(Users.date_added)
    return render_template(
        "add_user.html",
        form=form,
        name=name,
        our_users=our_users,
        page_instructions="Answer the questions and then click 'submit' to create an account.",
        page_title="Create an Account")


# Pass info to navbar
@app.context_processor
def base():
    form = SearchForm()
    return dict(form=form)


@app.route('/delete/<int:id>')
@login_required
def delete(id):
    if id == current_user.id:
        user_to_delete = Users.query.get_or_404(id)
        name = None
        form = UserForm()
        try:
            db.session.delete(user_to_delete)
            db.session.commit()
            flash("User Deleted Successfully!")
            our_users = Users.query.order_by(Users.date_added)
            return render_template(
                "add_user.html",
                form=form,
                name=name,
                our_users=our_users,
                page_instructions="These are your plants",
                page_title="My Plants")
        except:
            flash("Sorry, there was a problem deleting the user")
            return render_template(
                "add_user.html",
                form=form,
                name=name,
                our_users=our_users,
                page_instructions="These are your plants",
                page_title="My Plants")
    else:
        flash("Sorry, you can't delete that user")
        return redirect(url_for('account'))


@app.route('/plants/delete/<int:id>')
@login_required
def delete_plant(id):
    plant_to_delete = Plants.query.get_or_404(id)
    id = current_user.id
    if id == plant_to_delete.poster.id:
        try:
            db.session.delete(plant_to_delete)
            db.session.commit()
            # Return a message
            flash("Plant was deleted")
            # Grab all the plants from the database
            plants = Plants.query.order_by(Plants.date_posted)
            return render_template(
                "plants.html",
                plants=plants,
                page_instructions="These are your plants",
                page_title="My Plants"
                )

        except:
            # Return an error message
            flash("There was a problem deleting the plant")
            # Grab all the plants from the database
            plants = Plants.query.order_by(Plants.date_posted)
            return render_template(
                "plants.html",
                plants=plants,
                page_instructions="These are your plants",
                page_title="My Plants")
    else:
        # Return a message
        flash("You aren't authorised to delete that plant")
        # Grab all the plants from the database
        plants = Plants.query.order_by(Plants.date_posted)
        return render_template(
            "plants.html",
            plants=plants,
            page_instructions="These are your plants",
            page_title="My Plants")


@app.route('/plants/edit/<int:id>', methods=['GET', 'POST'])
@login_required
def edit_plant(id):
    plant = Plants.query.get_or_404(id)
    form = PlantForm()
    if form.validate_on_submit():
        plant.common_name = form.common_name.data
        plant.latin_name = form.latin_name.data
        plant.notes = form.notes.data
        plant.pic_url = form.pic_url.data
        plant.water_interval = form.water_interval.data
        plant.last_watered_date = form.last_watered_date.data
        # update database
        db.session.add(plant)
        db.session.commit()
        # Flash message
        flash("Post has been updated")
        # Redirect to plant page
        return redirect(url_for('plant', id=plant.id))
    if current_user.id == plant.poster_id:
        form.common_name.data = plant.common_name
        form.latin_name.data = plant.latin_name
        form.notes.data = plant.notes
        form.pic_url.data = plant.pic_url
        form.water_interval.data = plant.water_interval
        form.last_watered_date.data = plant.last_watered_date
        return render_template(
            'edit_plant.html',
            form=form,
            page_instructions="Change the information in the field boxes and click the tick",
            page_title="Edit Plant")
    else:
        flash("You aren't authorised to edit this plant")
        plants = Plants.query.order_by(Plants.date_posted)
        return render_template(
            "plants.html",
            plants=plants,
            page_instructions="Instructions here",
            page_title="Delete a Plant")


# Create a route decorator
@app.route('/')
def index():
    first_name = "Ross"
    stuff = "This is bold text"

    return render_template(
        "index.html",
        first_name=first_name,
        stuff=stuff,
        page_instructions="Plant Planner is a website where you can keep track of when you need to water your houseplants.",
        page_title="Plant Planner")


# Create Login Page
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = Users.query.filter_by(username=form.username.data).first()
        if user:
            # Check the hash
            if check_password_hash(user.password_hash, form.password.data):
                login_user(user)
                flash("Login successful")
                return redirect(url_for('account'))
            else:
                flash("Wrong password - try again")
        else:
            flash("That use doesn't exist - try again")
    return render_template(
        'login.html',
        form=form,
        page_instructions="Sign in to your user account",
        page_title="Log In")


# Flask_Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))


# Create logout function
@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    flash("You have logged out")
    return redirect(url_for('login'))


# Creating Custom Error Pages
# Invalid URL
@app.errorhandler(404)
def page_not_found(e):
    return render_template(
        "404.html",
        page_instructions="There's no page here",
        page_title="Page Title Here"
        ), 404


# Internal Server Error
@app.errorhandler(500)
def page_not_found(e):
    return render_template(
        "500.html",
        page_instructions="There's no page here",
        page_title="Page Title Here"
        ), 500


@app.route('/plants/<int:id>')
def plant(id):
    plant = Plants.query.get_or_404(id)
    return render_template(
        'plant.html',
        plant=plant,
        page_instructions="This is one of your plants",
        page_title="My Plant")


@app.route('/plants')
@login_required
def plants():
    id = current_user.id
    # Grab all the plants from the database
    plants = Plants.query.order_by(Plants.date_posted)
    return render_template(
        "plants.html",
        plants=plants,
        page_instructions="These are your plants",
        page_title="My Plants")


# Create Password Test Page
@app.route('/test_pw', methods=['GET', 'POST'])
def test_pw():
    email = None
    password = None
    pw_to_check = None
    passed = None
    form = PasswordForm()

    # Validate Form
    if form.validate_on_submit():
        email = form.email.data
        password = form.password_hash.data

        # Clear the form
        form.email.data = ''
        form.password_hash.data = ''

        # Look up user by email address
        pw_to_check = Users.query.filter_by(email=email).first()

        # Check hashed password
        passed = check_password_hash(pw_to_check.password_hash, password)


# Update Database Record
@app.route('/update/<int:id>', methods=['GET', 'POST'])
@login_required
def update(id):
    form = UserForm()
    name_to_update = Users.query.get_or_404(id)
    if request.method == "POST":
        name_to_update.name = request.form['name']
        name_to_update.email = request.form['email']
        name_to_update.username = request.form['username']
        try:
            db.session.commit()
            flash("User Updated Successfully!")
            return render_template(
                "update.html",
                form=form,
                name_to_update=name_to_update,
                id=id,
                page_instructions="Update here",
                page_title="Update")
        except:
            flash("It looks like something went wrong... Please try again")
            return render_template(
                "update.html",
                form=form,
                name_to_update=name_to_update,
                id=id,
                page_instructions="Update here",
                page_title="Update")
    else:
        return render_template(
            "update.html",
            form=form,
            name_to_update=name_to_update,
            id=id,
            page_instructions="Update here",
            page_title="Update")
