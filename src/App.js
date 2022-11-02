import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [incrementSec, setIncrementSec] = useState('');
  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeOn]);

  const handleReset = () => {
    setTime(0);
    setTimeOn(false);
  };

  const handleFive = () => {
    setTime((prevTime) => prevTime + 5000);
  };
  const handleSubmit = () => {
    setTime((prevTime) => prevTime + incrementSec * 1000);
  };
  return (
    <div>
      <div>
        <span>{'0' + Math.floor(time / 1000 / 60 / 60)}:</span>
        <span>{'0' + (Math.floor(time / 60000) % 60)}:</span>
        <span>{Math.floor(time / 1000) % 60}:</span>
        <span>{Math.floor(time / 10) % 100}</span>
      </div>
      <div>
        <button onClick={() => setTimeOn(true)}>Start</button>

        <button onClick={() => setTimeOn(false)}>Stop</button>

        <button onClick={handleReset}>Reset</button>

        <button onClick={handleFive}>plus 5 sec</button>

        <input
          type='number'
          value={incrementSec}
          onChange={(e) => setIncrementSec(+e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default App;
