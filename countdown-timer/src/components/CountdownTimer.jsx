// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDateTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDateTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      {days > 0 && <p>{days} days</p>}
      <p>{hours} hours</p>
      <p>{minutes} minutes</p>
      <p>{seconds} seconds</p>
    </div>
  );
};

export default CountdownTimer;
