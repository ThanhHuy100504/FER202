import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Button, Form } from 'react-bootstrap';

const QuizForm = () => {
  const { quizData, setQuizData } = useQuiz();
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddQuestion = () => {
    if (question && correctAnswer && answers.every(ans => ans)) {
      setQuizData([...quizData, { question, answers, correctAnswer }]);
      setQuestion('');
      setAnswers(['', '', '']);
      setCorrectAnswer('');
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Question</Form.Label>
        <Form.Control value={question} onChange={e => setQuestion(e.target.value)} />
      </Form.Group>

      {answers.map((ans, index) => (
        <Form.Group key={index}>
          <Form.Label>Answer {index + 1}</Form.Label>
          <Form.Control
            value={ans}
            onChange={e => {
              const newAnswers = [...answers];
              newAnswers[index] = e.target.value;
              setAnswers(newAnswers);
            }}
          />
        </Form.Group>
      ))}

      <Form.Group>
        <Form.Label>Correct Answer</Form.Label>
        <Form.Control value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)} />
      </Form.Group>

      <Button className="mt-2" onClick={handleAddQuestion}>Add Question</Button>
    </Form>
  );
};

export default QuizForm;
