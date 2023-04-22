from plantplanner import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, login_user, LoginManager
from flask_login import login_required, logout_user, current_user
from plantplanner.webforms import LoginForm, PlantForm, UserForm, PasswordForm
from plantplanner.webforms import NamerForm, SearchForm


# Create Blog Post Model
class Plants(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    common_name = db.Column(db.String(255), nullable=False)  
    latin_name = db.Column(db.String(255)) 
    water_interval = db.Column(db.Integer, nullable=False)
    last_watered_date = db.Column(db.Date, nullable=False)
    next_water = db.Column(db.Date)
    overdue = db.Column(db.Boolean)
    notes = db.Column(db.Text)
    pic_url = db.Column(db.String(255))
    date_posted = db.Column(db.DateTime, default=datetime.utcnow)
    # Foreign key to link users 
    # (refer to primary key of the user)
    poster_id = db.Column(db.Integer, db.ForeignKey('users.id'))


# Create Users Model
class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    about_author = db.Column(db.Text(), nullable=True)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)
    profile_pic = db.Column(db.String, nullable=True)
    # Password
    password_hash = db.Column(db.String(128))
    # User can have many plants
    plants = db.relationship(
        'Plants', backref='poster', cascade="all, delete", lazy=True)

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    # Create a String
    def __repr__(self):
        return '<Name %r>' % self.name

