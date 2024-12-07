from flask import Flask
from flask_cors import CORS
from extensions import db
from routes.units import units_bp
from routes.food_items import food_items_bp

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3001"}})  # Update this line

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///smart_fridge.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    app.register_blueprint(units_bp)
    app.register_blueprint(food_items_bp)

    @app.route('/')
    def home():
        return {"message": "Welcome to the Smart Fridge App!"}

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5001)


