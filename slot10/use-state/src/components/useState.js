import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }} >
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;