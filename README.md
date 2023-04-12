   1. Expected behaviour: Form is visible when navigating to test_pw.html
   2. Actual behaviour: Jinja error - AttributeError: 'PasswordForm' object has no attribute 'validate_on_submit'
   3. Solution: Import FlaskForm from flask_wtf, and pass FlaskForm into the form.



   User pic used - https://pixabay.com/de/vectors/person-einzeln-allein-icon-1824147/


   How to set up the environment after session times out:
   In the terminal type:
      - set_pg
      - psql
   
   How to run the server to see the website in the browser:
   In the terminal type:
      - python3 run.py
   
   Installations and commands in the terminal - needed if forking or using a different workspace
   * pip3 install 'Flask-SQLAlchemy<3' psycopg2 sqlalchemy==1.4.46
   * pip install flask-wtf
   * pip install flask-sqlalchemy
   * To create a working database in the workspace:
      - set_pg
      - psql
      - CREATE DATABASE plantplanner;
      - \q
      - python3
      - from plantplanner import db
      - db.create_all()
      - exit()
   * To delete the database (please note that you must delete and re-create the database if you change the models. Migration is not set up)
      - set_pg
      - psql
      - DROP DATABASE plantplanner;
      - \q
   * pipenv install python-dotenv
   * pip install flask_login
   * pip install flask-ckeditor

