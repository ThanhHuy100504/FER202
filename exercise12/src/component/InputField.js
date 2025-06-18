import React, { useState } from 'react';

function InputField() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const styles = {
  container: {
    backgroundColor: '#2b2b2b',
    color: '#fff',
    padding: '40px',
    textAlign: 'center',
    borderRadius: '8px',
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '80%',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  text: {
    fontSize: '22px',
    marginTop: '20px',
  },
};
  return (
    <div style={styles.container}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        style={styles.input}
      />
      <h2 style={styles.text}>Input text: {text}</h2>
    </div>
  );
}


export default InputField;
