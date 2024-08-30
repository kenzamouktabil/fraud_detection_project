import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'; // Import icons for visual indicators

const ResultsDisplay = ({ result }) => {
  if (!result) return null;

  const isFraudDetected = result.fraud_detected;

  return (
    <div className="container results-container" style={{ marginTop: '8px' }}> {/* Adjust margin here */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h5 style={{ marginRight: '10px' ,marginLeft:'15%' }}>Fraud Detection Result:</h5>
        <div 
          className={`alert ${isFraudDetected ? 'alert-danger' : 'alert-success'}`} 
          role="alert"
          style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', marginBottom: '0' }}
        >
          {isFraudDetected ? (
            <>
              <FaExclamationTriangle style={{ marginRight: '8px', color: 'red' }} />
              <strong>Fraud detected!</strong>
            </>
          ) : (
            <>
              <FaCheckCircle style={{ marginRight: '8px', color: 'green' }} />
              <strong>No fraud detected.</strong>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
