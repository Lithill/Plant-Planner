import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_ckeditor import CKEditor
if os.path.exists("env.py"):
    import env  # noqa


app = Flask(__name__)
# Add CKEditor
ckeditor = CKEditor(app)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")

db = SQLAlchemy(app)

from plantplanner import routes  # noqa
