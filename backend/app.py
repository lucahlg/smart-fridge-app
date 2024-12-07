from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Example SQLAlchemy config (using SQLite for now)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///smart_fridge.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/')
def home():
    return {"message": "Welcome to the Smart Fridge App!"}

if __name__ == '__main__':
    app.run(debug=True)
