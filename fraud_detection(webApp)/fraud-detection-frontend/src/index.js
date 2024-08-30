// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if using it
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JavaScript (includes Popper.js)
import './styles/App.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
