// src/components/FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onResult }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!file) {
      setError('Please select a file to upload.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/fraud_detection_app/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File Data Processed:', response.data.processed_data); // Add this line to inspect data

      onResult(response.data);
    } catch (err) {
      setError('Error uploading file: ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="card p-3 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label className="seg_input" htmlFor="transactionData">Transaction Data File (.csv, .JSON, .excel ): </label>

          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload File'}
        </button>
        
      </form>
      </div>
    </div>
  );
};

export default FileUpload;
