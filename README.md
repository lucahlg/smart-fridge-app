# Project: Smart Fridge App

**Description**: The "Smart Fridge App" is a local web application being developed to manage and monitor fridge inventory. The project has a React-based frontend, a Flask-based backend, and an SQL database. Everything runs locally using WSL (Linux), and the app is version-controlled with Git.

**Current State**:
1. **Folder Structure**:
   - Root folder: `smart-fridge-app`
   - Frontend: `smart-fridge-app/frontend`
   - Backend: `smart-fridge-app/backend`

2. **Frontend**:
   - React application created using `create-react-app`.
   - Development server runs locally on `http://localhost:3000`.
   - A basic service (`services/api.js`) has been set up to fetch data from the backend.
   - The `App.js` file displays a message fetched from the backend.

3. **Backend**:
   - Flask app initialized in `backend/app.py`.
   - CORS enabled for communication with the React frontend.
   - SQLite database set up with SQLAlchemy in `backend/models.py`.
   - Flask development server runs locally on `http://localhost:5000`.

4. **Database**:
   - SQLite database initialized with SQLAlchemy.
   - A simple `User` model has been created in `models.py`.

5. **Environment**:
   - Virtual environment for Python dependencies: `venv/` (excluded from Git).
   - Node.js for frontend dependencies: `node_modules/` (excluded from Git).

6. **Git Integration**:
   - Project is under version control with an appropriate `.gitignore` file in place.

---

### **Instructions for Setting Up After Cloning**
After cloning the repository, follow these steps to set up the project:

1. **Set Up the Backend**:
   - Navigate to the `backend` folder:
     ```bash
     cd smart-fridge-app/backend
     ```
   - Create and activate a Python virtual environment:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```
   - If `requirements.txt` doesn’t exist, generate it by running:
     ```bash
     pip freeze > requirements.txt
     ```

2. **Set Up the Frontend**:
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install Node.js dependencies:
     ```bash
     npm install
     ```

3. **Create the Database Tables**:
   - Navigate to the `backend` folder:
     ```bash
     cd ../backend
     ```
   - Ensure your virtual environment is active:
     ```bash
     source venv/bin/activate
     ```
   - Run the `create_tables.py` script to initialize the database tables:
     ```bash
     python create_tables.py
     ```
   - This script will create all necessary tables defined in `models.py`.

4. **Run the Application**:
   - Start the Flask backend:
     ```bash
     cd ../backend
     python app.py
     ```
   - Start the React frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the Application**:
   - React app: `http://localhost:3000`
   - Flask API: `http://localhost:5000`

---
