import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './QuizApp.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'What is the largest planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
  },
];

const QuizApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      {!showResult ? (
        <Question
          data={questions[currentIndex]}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
          onSubmit={handleSubmit}
        />
      ) : (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default QuizApp;
