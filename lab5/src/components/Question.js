import React, { useState } from 'react';

const Question = ({ data, onAnswer }) => {
  const [selected, setSelected] = useState('');

  const handleSelect = (option) => setSelected(option);

  return (
    <div>
      <h4>{data.question}</h4>
      <ul className="list-group">
        {data.options.map((option, idx) => (
          <li
            key={idx}
            className={`list-group-item ${selected === option ? 'active' : ''}`}
            onClick={() => handleSelect(option)}
            style={{ cursor: 'pointer' }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-success mt-3"
        disabled={!selected}
        onClick={() => onAnswer(selected)}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
