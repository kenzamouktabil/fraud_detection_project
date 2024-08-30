import axios from 'axios';

const API_URL = 'http://localhost:8000/fraud_detection_app'; // Ensure this matches the Django path

export const detectFraud = async (transactionData) => {
  try {
    const response = await axios.post(`${API_URL}/detect/`, { transaction_data: transactionData });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : 'Network error');
  }
};
