from flask import Flask, render_template


# Create a Flask Instance
app = Flask(__name__)

# Create a route decorator
@app.route('/')

def index():
    return render_template("index.html")

# https://5000-lithill-plantplanner-zz84eujkqj4.ws-eu93.gitpod.io//user/Ross
@app.route('/user/<name>')

def user(name):
    return "<h1>Hello {}!</h1>".format(name)
