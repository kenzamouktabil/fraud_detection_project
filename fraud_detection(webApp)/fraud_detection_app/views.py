from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import numpy as np
import tensorflow as tf
import joblib
import pandas as pd

# Load your trained model and the scaler
model = tf.keras.models.load_model('fraud_detection_app/auto.keras')
scaler = joblib.load('fraud_detection_app/scaler.pkl')

@csrf_exempt
def detect_fraud(request):
    if request.method == "POST":
        try:
            # Parse the JSON data from the request
            data = json.loads(request.body)
            transaction_data = data.get("transaction_data")
            
            # Convert the transaction data from string to list of floats
            transaction_data = np.array([float(i) for i in transaction_data.split(',')])
            transaction_data = transaction_data.reshape(1, -1)  # Reshape for model input

            # Scale the transaction data
            transaction_data = scaler.transform(transaction_data)
            
            # Make the prediction using the model
            reconstruction = model.predict(transaction_data)
            reconstruction_error = np.mean(np.square(transaction_data - reconstruction))
            
            # Use a predefined threshold to determine if the transaction is fraudulent
            threshold = 0.02  # You can adjust this based on your model's performance
            fraud_detected = reconstruction_error > threshold
            
            # Convert NumPy boolean to Python boolean
            fraud_detected = bool(fraud_detected)
            
            # Return the result as a JSON response
            return JsonResponse({"fraud_detected": fraud_detected})
        
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"error": "Invalid request method"}, status=400)


@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        try:
            file = request.FILES['file']
            if file.name.endswith('.csv'):
                data = pd.read_csv(file, header=None)  # Ensure no header if not expected
                #if i want to use first raw as parameters i do not use header=none
            elif file.name.endswith('.xlsx'):
                data = pd.read_excel(file, header=None)
            elif file.name.endswith('.json'):
                data = pd.read_json(file)
            else:
                return JsonResponse({'error': 'Unsupported file type'}, status=400)

            # Assuming single-row data for fraud detection
            transaction_data = data.values.flatten()  # Flatten if single row expected
            transaction_data = transaction_data.reshape(1, -1)  # Ensure correct shape

            # Scale the transaction data
            transaction_data = scaler.transform(transaction_data)
            
            # Make the prediction using the model
            reconstruction = model.predict(transaction_data)
            reconstruction_error = np.mean(np.square(transaction_data - reconstruction))
            
            # Use a predefined threshold to determine if the transaction is fraudulent
            threshold = 0.02  # Adjust based on your model's performance
            fraud_detected = reconstruction_error > threshold
            
            # Convert NumPy boolean to Python boolean
            fraud_detected = bool(fraud_detected)
            
            # Return the result as a JSON response
            return JsonResponse({"fraud_detected": fraud_detected})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
