import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Card, Button } from 'react-bootstrap';

const QuizList = () => {
  const { quizData, userAnswers, setUserAnswers } = useQuiz();

  const handleAnswer = (index, answer) => {
    setUserAnswers({ ...userAnswers, [index]: answer });
  };

  return (
    <div>
      {quizData.map((q, idx) => (
        <Card key={idx} className="mb-3">
          <Card.Body>
            <Card.Title>{q.question}</Card.Title>
            {q.answers.map((ans, i) => (
              <Button
                key={i}
                variant={userAnswers[idx] === ans ? 'primary' : 'outline-primary'}
                className="m-1"
                onClick={() => handleAnswer(idx, ans)}
              >
                {ans}
              </Button>
            ))}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default QuizList;
