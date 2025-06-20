import React from 'react';

const Question = ({ data, selectedOption, onOptionSelect, onSubmit }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => onOptionSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button disabled={!selectedOption} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Question;
