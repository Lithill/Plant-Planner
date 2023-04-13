from plantplanner import db
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField
from wtforms import ValidationError, TextAreaField, IntegerField, validators
from wtforms import URLField
from wtforms.validators import DataRequired, EqualTo, Length, NumberRange
from wtforms.widgets import TextArea
from wtforms.fields import DateField, DateTimeField
from flask_ckeditor import CKEditorField
from flask_wtf.file import FileField


# Create Plant Form
class PlantForm(FlaskForm):
    common_name = StringField("Common Name", validators=[DataRequired()])
    notes = CKEditorField('Notes', validators=[DataRequired()])
    pic_url = URLField("Image Url")
    latin_name = StringField("Latin Name")
    water_interval = IntegerField(
        "Days between watering?",
        [validators.NumberRange(min=1, max=182)]
        )
    last_watered_date = DateField(
        'Date last watered?'
        )
    submit = SubmitField("Submit")


# Create a UserForm Class
class UserForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    username = StringField("Username", validators=[DataRequired()])
    email = StringField("Email", validators=[DataRequired()])
    about_author = TextAreaField("About Author")
    password_hash = PasswordField(
        'Password',
        validators=[DataRequired(), EqualTo(
            'password_hash2',
            message='Passwords must match!'
            )]
        )
    password_hash2 = PasswordField(
        'Confirm password',
        validators=[DataRequired()]
        )
    profile_pic = FileField("Profile Pic")
    submit = SubmitField("Submit")


# Create a Form Class
class NamerForm(FlaskForm):
    name = StringField("What's Your Name", validators=[DataRequired()])
    submit = SubmitField("Submit")


class PasswordForm(FlaskForm):
    email = StringField("What's your email?", validators=[DataRequired()])
    password_hash = PasswordField(
        "What's your password?", validators=[DataRequired()]
        )
    submit = SubmitField("Submit")


# Create login form
class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField("Submit")


# Create search form
class SearchForm(FlaskForm):
    searched = StringField("Searched", validators=[DataRequired()])
    submit = SubmitField("Submit")
