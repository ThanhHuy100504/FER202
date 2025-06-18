import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  const styles = {
  container: {
    backgroundColor: '#2b2b2b',
    color: '#fff',
    padding: '40px',
    textAlign: 'center',
    borderRadius: '8px',
    width: '200px',
    margin: 'auto',
    marginTop: '100px'
  },
  text: {
    fontSize: '24px',
    marginTop: '20px'
  }
};

  return (
    <div style={styles.container}>
      <button onClick={toggleText}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <h2 style={styles.text}>Toggle me!</h2>}
    </div>
  );
}

export default ToggleVisibility;
