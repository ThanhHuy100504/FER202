import React, { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const styles = {
  wrapper: {
    backgroundColor: '#2b2b2b',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    borderRadius: '8px',
    width: '600px',
    margin: '100px auto',
    fontFamily: 'Arial, sans-serif',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
  },
  box: {
    width: '100px',
    height: '100px',
    border: '2px solid #fff',
    borderRadius: '4px',
  },
};

  return (
    <div style={styles.wrapper}>
      <select value={color} onChange={handleChange} style={styles.select}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          ...styles.box,
          backgroundColor: color || 'transparent',
        }}
      />
    </div>
  );
}

export default ColorSwitcher;
