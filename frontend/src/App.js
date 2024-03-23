// src/components/ExampleComponent.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Using axios for HTTP requests

const ExampleComponent = () => {
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    // Function to make HTTP request to backend
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/predict', { message: 'Hello, world!' });
        setPrediction(response.data.prediction);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Prediction: {prediction}</h1>
    </div>
  );
};

export default ExampleComponent;
