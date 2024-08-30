// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'; // Import the Home component
import './styles/App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (result) => {
    setResult(result);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onResult={handleResult} 
                result={result} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
