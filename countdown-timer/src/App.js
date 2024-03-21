// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import CountdownTimer from './components/CountdownTimer';

const App = () => {
  const [targetDateTime, setTargetDateTime] = useState(null);

  useEffect(() => {
    const storedDateTime = localStorage.getItem('targetDateTime');
    if (storedDateTime) {
      setTargetDateTime(storedDateTime);
    }
  }, []);

  const handleFormSubmit = (dateTime) => {
    setTargetDateTime(dateTime);
    localStorage.setItem('targetDateTime', dateTime);
  };

  // const handleFormSubmit = (dateTime) => {
  //   setTargetDateTime(dateTime);
  // };

  return (
    <div className="container">
      <InputForm onSubmit={handleFormSubmit} />
      {targetDateTime && (
        <div className="timer">
          <h2>Countdown Timer</h2>
          <CountdownTimer targetDateTime={targetDateTime} />
        </div>
      )}
    </div>
  );
};

export default App;
