# Fraud Detection Web Application

This project is a fraud detection web application that combines a machine learning model for fraud detection with a web interface. The application uses an autoencoder model developed in Google Colab, integrated into a Django backend and a React frontend.

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

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/fraud_detection_project.git
   cd fraud_detection_project




2. **Set up the Backend (Django)**:

```bash

cd fraud_detection(webApp)
python -m venv venv
source venv/bin/activate   # On Windows use: venv\Scripts\activate
pip install -r requirements.txt  # Ensure you have a requirements.txt file
python manage.py migrate
python manage.py runserver



3. **Set up the frontend (React)**:

```bash 
cd fraud-detection-frontend
npm install
npm start


##Usage
Access the application via http://localhost:3000 for the frontend and http://localhost:8000 for the backend.
The machine learning model is automatically loaded when the Django server starts.




# Model Training
The model was trained in Google Colab using the files found in Model_autoencodeur. You can use the provided notebooks to retrain or evaluate the model.
