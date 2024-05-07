"""
This is the Flask API backend server for Project Penguin. It returns data to the frontend.
Run in terminal with: python app.py
"""
from flask import Flask, request, jsonify
from goals_service import get_goals
from goals_service import add_task
from goals_service import delete_task
from tokens_service import get_tokens
from tokens_service import add_tokens
from tokens_service import remove_tokens
from stats_service import add_stats
from stats_service import get_stats
from flask_cors import CORS

# initiate a Flask application
app = Flask(__name__)
cors = CORS(app, origins=[
    'http://localhost',
    'http://localhost:3000',
])

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
@app.route("/home", methods=['GET', 'POST'])
def home():
    response = get_stats()
    #response = jsonify(response)
    if request.method == 'GET':
        return response
    if request.method == 'POST':
        method = request.form.get("method")
        return add_stats(method)

# define route to goals page
@app.route("/goals", methods=['GET', 'POST', 'DELETE'])
def goals():
    response = get_goals()
    #response = jsonify(response)
    if request.method == 'GET':
        return response
    if request.method == 'POST':
        task_title = request.form.get("title")
        return add_task(task_title)
    if request.method == 'DELETE':
        task_id = request.form.get("id")
        return delete_task(task_id)
        

# define route to questions page
@app.route("/questions")
def questions():
    return "<h1>questions</h1>"

# define route to hackings page
@app.route("/hackings")
def hackings():
    return "<h1>hackings</h1>"

# define route to shop page
@app.route("/shop", methods=['GET', 'POST', 'DELETE'])
def shop():
    response = get_tokens()
    #response = jsonify(response)
    if request.method == 'GET':
        return response
    if request.method == 'POST':
        task_title = request.form.get("title")
        return response
    if request.method == 'DELETE':
        item_type = request.form.get("type")
        return remove_tokens(item_type)

""" Run Flask Server """

# run the API
if __name__ == '__main__':
    app.run(debug=True)