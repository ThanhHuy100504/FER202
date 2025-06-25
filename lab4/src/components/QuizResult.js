import React, { useEffect, useState } from 'react';
import { useQuiz } from '../context/QuizContext';

const QuizResult = () => {
  const { quizData, userAnswers } = useQuiz();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const result = quizData.reduce((total, q, index) => {
      return userAnswers[index] === q.correctAnswer ? total + 1 : total;
    }, 0);
    setScore(result);
  }, [userAnswers, quizData]);

  return (
    <div>
      <h4>Result: {score} / {quizData.length}</h4>
    </div>
  );
};

export default QuizResult;
