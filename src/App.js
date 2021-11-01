import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './clock/Clock';
import DigitalClock from './digitalClock/DigitalClock';

function App() {
  const [time, setTime] = useState(new Date());
  const tick = setInterval(() => setTime(new Date()), 1000);
  useEffect(() => {
    return function clear() {
      clearInterval(tick);
    };
  });
  return (
    <div>
      <Clock time={time}/>
      <DigitalClock time={time}/>
    </div>
    
  );
}

export default App;
