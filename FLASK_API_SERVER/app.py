"""
This is the Flask API backend server for Project Penguin. It returns data to the frontend.
Run in terminal with: python app.py
"""
from flask import Flask, request, jsonify
from badges_service import get_badges

# initiate a Flask application
app = Flask(__name__)

# example database
db = {
    'wows': {
        'woahhh': {
            'goals completed': 10
        },
        'WOWW': {
            'goals completed': 20
        }
    }
}

""" Define API Endpoints """

# define a route "/testdb"  FOR TESTING
@app.route("/testdb")
def index():
    # return database
    return db

# define a route to log in page
@app.route("/")
def login():
    # define logic for log in page
    return "<h1>log in</h1>"

# define route to home page
@app.route("/home")
def home():
    return "<h1>home</h1>"

# define route to goals page
@app.route("/goals", methods=['GET'])
def goals():
    response = get_badges()
    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    #response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    #response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

# define route to questions page
@app.route("/questions")
def questions():
    return "<h1>questions</h1>"

# define route to hackings page
@app.route("/hackings")
def hackings():
    return "<h1>hackings</h1>"

# define route to shop page
@app.route("/shop")
def shop():
    return "<h1>shop</h1>"

""" Run Flask Server """

# run the API
if __name__ == '__main__':
    app.run(debug=True)