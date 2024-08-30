import React, { useState } from 'react';
import { detectFraud } from '../services/api';

import './FraudDetectionForm.css'; // For custom styles

const FraudDetectionForm = ({ onResult }) => {
  const [transactionData, setTransactionData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //const [result, setResult] = useState(null); // State for result

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      console.log('Manual Input Data:', transactionData); // Add this line to inspect data

      const result = await detectFraud(transactionData);
      //setResult(result); // Set the result state

      onResult(result);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <div className="card p-3 mb-4"> 
      <form onSubmit={handleSubmit} > 
        <div className="form-group">
          
          <label className="first_input" htmlFor="transactionData">Transaction Data (comma-separated values) : </label>
          <input
            type="text"
            className="form-control"
            id="transactionData"
            value={transactionData}
            onChange={(e) => setTransactionData(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button  type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Detecting...' : 'Detect Fraud'}
        </button>  
       
      </form>
      </div>
    </div>
  );
};

export default FraudDetectionForm;


//place between button and form

//{result && (
 // <div className="mt-3">
  //<h5>Fraud Detection Result:</h5>
  //<p>{result.fraud_detected ? 'Fraud detected!' : 'No fraud detected.'}</p>
//</div>
//)}