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

if os.environ.get("DEVELOPMENT") == "True":
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
else:
    uri = os.environ.get("DATABASE_URL")
    if uri.startswith("postgres://"):
        uri = uri.replace("postgres://", "postgresql://", 1)
    app.config["SQLALCHEMY_DATABASE_URI"] = uri

UPLOAD_FOLDER = 'static/images/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db = SQLAlchemy(app)

from plantplanner import routes  # noqa
