import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Rome', 'Madrid'],
    answer: 'Paris'
  },
  {
    id: 2,
    question: 'Which is the largest planet?',
    options: ['Earth', 'Venus', 'Jupiter', 'Mars'],
    answer: 'Jupiter'
  }
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) setScore(prev => prev + 1);
    setCurrent(prev => prev + 1);
  };

  return (
    <div className="container mt-4">
      {current < questions.length ? (
        <Question data={questions[current]} onAnswer={handleAnswer} />
      ) : (
        <h3>You scored {score}/{questions.length}</h3>
      )}
    </div>
  );
};

export default Quiz;
