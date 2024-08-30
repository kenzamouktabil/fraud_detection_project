# Fraud Detection Web Application
This project is a fraud detection web application designed to help detect fraudulent transactions using machine learning. The app allows users to input transaction data or upload transaction files to identify potential fraud.

The application uses the autoencoder model I developed in Google Colab, trained on normal transaction data to detect anomalies, indicating possible fraud, integrated into a Django backend and a React frontend.

[![Fraud Detection Web Application](https://img.youtube.com/vi/5KFDZas-kss/maxresdefault.jpg)](https://www.youtube.com/watch?v=5KFDZas-kss)


## Project Structure

- **Model_autoencodeur**: Contains the machine learning model files, including the `.h5` and `.keras` model files, as well as Jupyter notebooks used for training and evaluation.
  - `auto(2).ipynb`: Notebook with the model training code.
  - `auto(2)_withcells.ipynb`: Enhanced version of the notebook with additional cells.
  - `auto.keras`: Keras model file.
  - `autencoder_model.h5`: Saved model in HDF5 format.
  - `scaler.pkl`: Scaler used for preprocessing data.
  
- **fraud_detection(webApp)**: Contains the main web application.
  - **fraud-detection-frontend**: React frontend for the application.
    - `public`: Static files and public assets.
    - `src`: Source code for the React application.
    - `.gitignore`: List of files and directories ignored by Git.
    - `README.md`: Documentation for the frontend.
    - `package.json`: Dependencies and scripts for the React app.
    - `package-lock.json`: Locked versions of the dependencies.

  - **fraud_detection**: Core of the Django backend, which handles the application logic.
  
  - **fraud_detection_app**: Django application folder containing views, models, and other backend files.
    - `admin.py`: Admin configurations.
    - `apps.py`: Application configuration.
    - `models.py`: Django models for database schema.
    - `views.py`: Views that handle HTTP requests and responses.
    - `urls.py`: URL routing for the Django application.

  - **node_modules**: Contains all npm dependencies (not tracked in the repo).

  - **db.sqlite3**: SQLite database file for the Django backend.

  - **manage.py**: Command-line utility for managing the Django project.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Django
- **Machine Learning**: Keras Autoencoder
- **Database**: SQLite

## Getting Started

### Prerequisites

- Node.js (for running the frontend)
- Python 3.x (for running the backend)
- Virtual environment for Python (`venv` or `virtualenv` recommended)


## Installation

### 1. Clone the repository

First, clone the repository to your local machine and navigate into the project directory:

    ```bash
    git clone https://github.com/yourusername/fraud_detection_project.git
    cd fraud_detection_project
    ```

### 2. Set up the Backend (Django)

Navigate to the backend directory, create a virtual environment, activate it, and install the necessary dependencies:

    ```bash
    cd fraud_detection(webApp)
    python -m venv venv
    source venv/bin/activate   # On Windows use: venv\Scripts\activate
    pip install -r requirements.txt  # Ensure you have a requirements.txt file
    python manage.py migrate
    python manage.py runserver
    ```

### 3. Set up the Frontend (React)

Next, set up the frontend by navigating to the React project directory, installing dependencies, and starting the development server:

    ```bash
    cd fraud-detection-frontend
    npm install
    npm start
    ```

## Usage

- Access the frontend of the application via `http://localhost:3000`.
- Access the backend via `http://localhost:8000`.

The machine learning model is automatically loaded when the Django server starts.

## Model Training

The machine learning model used for fraud detection was trained in Google Colab . You can use the provided notebooks to retrain or evaluate the model.


