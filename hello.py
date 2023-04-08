from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

# Create a Flask Instance
app = Flask(__name__)
# Change this key when put it in gitignore
app.config['SECRET_KEY'] = "g_EQCyO0}um0MFmst0.:0cwUb0T1[f9f"


# Create a Form Class
class NamerForm(FlaskForm):
    name = StringField("What's Your Name", validators=[DataRequired()])
    submit = SubmitField("Submit")


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


# Create Name Page
@app.route('/name', methods=['GET', 'POST'])
def name():
    name = None
    form = NamerForm()
    # Validate Form
    if form.validate_on_submit():
        name = form.name.data
        form.name.data = ''

    return render_template(
        "name.html",
        name=name,
        form=form)
