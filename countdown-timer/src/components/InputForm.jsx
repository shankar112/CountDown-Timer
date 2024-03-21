// src/components/InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dateTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Target Date & Time:
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
      </label>
      <button type="submit">Start Countdown</button>
    </form>
  );
};

export default InputForm;
