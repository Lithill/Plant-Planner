from flask import Flask, render_template, flash, request, redirect, url_for
from plantplanner import app, db
from plantplanner.models import Users, UserForm, NamerForm, PasswordForm
from plantplanner.models import Posts, PostForm
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_wtf import FlaskForm


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
                email=form.email.data,
                favourite_colour=form.favourite_colour.data,
                password_hash=hashed_pw)
            db.session.add(user)
            db.session.commit()
        name = form.name.data
        form.name.data = ''  # clears the form
        form.email.data = ''  # clears the form
        form.favourite_colour.data = ''  # clears the form
        form.password_hash.data = ''  # clears the form
        flash("User Added Successfully!")
    our_users = Users.query.order_by(Users.date_added)
    return render_template(
        "add_user.html",
        form=form,
        name=name,
        our_users=our_users)


# Create a route decorator
@app.route('/')
def index():
    first_name = "Ross"
    stuff = "This is bold text"

    return render_template(
        "index.html",
        first_name=first_name,
        stuff=stuff)


# https://5000-lithill-plantplanner-zz84eujkqj4.ws-eu93.gitpod.io//user/Ross
@app.route('/user/<name>')
def user(name):
    return render_template("user.html", user_name=name)


# Creating Custom Error Pages
# Invalid URL
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


# Internal Server Error
@app.errorhandler(500)
def page_not_found(e):
    return render_template("500.html"), 500


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

    return render_template(
        "test_pw.html",
        email=email,
        password=password,
        pw_to_check=pw_to_check,
        passed=passed,
        form=form)


# Create Name Page
@app.route('/name', methods=['GET', 'POST'])
def name():
    name = None
    form = NamerForm()
    # Validate Form
    if form.validate_on_submit():
        name = form.name.data
        form.name.data = ''
        flash("Form Submitted Successfully!")

    return render_template(
        "name.html",
        name=name,
        form=form)


# Update Database Record
@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    form = UserForm()
    name_to_update = Users.query.get_or_404(id)
    if request.method == "POST":
        name_to_update.name = request.form['name']
        name_to_update.email = request.form['email']
        name_to_update.favourite_colour = request.form['favourite_colour']
        try:
            db.session.commit()
            flash("User Updated Successfully!")
            return render_template(
                "update.html",
                form=form,
                name_to_update=name_to_update,
                id=id)
        except:
            flash("It looks like something went wrong... Please try again")
            return render_template(
                "update.html",
                form=form,
                name_to_update=name_to_update,
                id=id)
    else:
        return render_template(
            "update.html",
            form=form,
            name_to_update=name_to_update,
            id=id)


@app.route('/delete/<int:id>')
def delete(id):
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
            our_users=our_users)
    except:
        flash("Sorry, there was a problem deleting the user")
        return render_template(
            "add_user.html",
            form=form,
            name=name,
            our_users=our_users)


# Add Post Page
@app.route('/add-post', methods=['GET', 'POST'])
def add_post():
    form = PostForm()

    if form.validate_on_submit():
        post = Posts(
            title=form.title.data,
            content=form.content.data,
            author=form.author.data,
            slug=form.slug.data
            )
        # Clear the form
        form.title.data = ''
        form.content.data = ''
        form.author.data = ''
        form.slug.data = ''

        # Add post to database
        db.session.add(post)
        db.session.commit()

        # Return a message
        flash("Post submitted successfully")

    # Redirect to the webpage
    return render_template("add_post.html", form=form)


@app.route('/posts')
def posts():
    # Grab all the posts from the database
    posts = Posts.query.order_by(Posts.date_posted)
    return render_template("posts.html", posts=posts)


@app.route('/posts/<int:id>')
def post(id):
    post = Posts.query.get_or_404(id)
    return render_template('post.html', post=post)


@app.route('/posts/edit/<int:id>', methods=['GET', 'POST'])
def edit_post(id):
    post = Posts.query.get_or_404(id)
    form = PostForm()
    if form.validate_on_submit():
        post.title = form.title.data
        post.author = form.author.data
        post.slug = form.slug.data
        post.content = form.content.data
        # update database
        db.session.add(post)
        db.session.commit()
        # Flash message
        flash("Post has been updated")
        # Redirect to post page
        return redirect(url_for('post', id=post.id))
    form.title.data = post.title
    form.author.data = post.author
    form.slug.data = post.slug
    form.content.data = post.content
    return render_template('edit_post.html', form=form)


@app.route('/posts/delete/<int:id>')
def delete_post(id):
    post_to_delete = Posts.query.get_or_404(id)

    try:
        db.session.delete(post_to_delete)
        db.session.commit()
        # Return a message
        flash("Blog post was deleted")
        # Grab all the posts from the database
        posts = Posts.query.order_by(Posts.date_posted)
        return render_template("posts.html", posts=posts)

    except:
        # Return an error message
        flash("There was a problem deleting the post")
        # Grab all the posts from the database
        posts = Posts.query.order_by(Posts.date_posted)
        return render_template("posts.html", posts=posts)
