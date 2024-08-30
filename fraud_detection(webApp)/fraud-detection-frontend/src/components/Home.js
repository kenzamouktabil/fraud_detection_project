// src/components/Home.js
import React from 'react';
import FraudDetectionForm from './FraudDetectionForm';
import ResultsDisplay from './ResultsDisplay';
import FileUpload from './FileUpload';
import './FraudDetectionForm.css'; // Ensure consistent styling

const Home = ({ onResult, result }) => {
  return (
    <div className="mt-3">
      <h4>Welcome to the Fraud Detection App</h4>

      {/* Combined forms inside a single frame using a card layout */}
      <div className="card p-1 ">
        <FraudDetectionForm onResult={onResult} />
        <hr className="my-1 mb-1 p-1" />
        <FileUpload onResult={onResult} />
      </div >
      {/* Display results below the forms */}
      <ResultsDisplay result={result} />
    </div>
  );
};

export default Home;
