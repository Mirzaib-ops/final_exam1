import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const lights = ['red', 'yellow', 'green'];
    const interval = setInterval(() => {
      setActiveLight(prev => {
        const currentIndex = lights.indexOf(prev);
        return lights[(currentIndex + 1) % lights.length];
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'right',
      padding: '8px'
    }}>
      <h2>Traffic Light Simulator</h2>
      <div style={{
        backgroundColor: '#388',
        padding: '9px',
        borderRadius: '10px',
        width: '90px'
      }}>
        {['red', 'yellow', 'green'].map(color => (
          <div key={color} style={{
            width: '60px',
            height: '80px',
             borderRadius: '65%',
           backgroundColor:  activeLight === color ? color : '#585',
            margin: '8px auto',
            border: '5px solid #00',
            transition: 'background-color 0.5s ease'
          }} />
        ))}
      </div>
    </div>
  );
};
export default TrafficLightSimulator;