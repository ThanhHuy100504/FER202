import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
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
      <button onClick={handleIncrement}>Increment</button>
      <h2 style={styles.text}>Count: {count}</h2>
    </div>
  );
}

export default Counter;
