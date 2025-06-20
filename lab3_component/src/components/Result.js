import React from 'react';

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default Result;
