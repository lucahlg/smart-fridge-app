from app import create_app
from extensions import db
from models import User, Unit, FoodItem  # Import all models

def create_all_tables():
    """Create all tables in the database."""
    app = create_app()  # Initialize the Flask application
    with app.app_context():
        print("Creating all tables...")
        db.create_all()  # Create all tables based on the models
        print("All tables created successfully.")

if __name__ == "__main__":
    create_all_tables()
