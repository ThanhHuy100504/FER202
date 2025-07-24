import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../redux/quizSlice';
import { useNavigate } from 'react-router-dom';
export default function QuizResult() {
  const questions = useSelector(state => state.quiz.questions);
  const correctCount = questions.filter(q => q.userAnswer === q.correct).length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRetry = () => {
    dispatch(resetQuiz());
    navigate('/quizzes');
  };
  const handleReview = () => {
    navigate('/quiz/review');
  };
  return (
    <div style={{ maxWidth: 650, margin: '32px auto', background: '#fff', borderRadius: 10, boxShadow: '0 4px 32px #eee', padding: 36, textAlign: "center" }}>
      <h2 style={{ color: "#1976d2" }}>Result</h2>
      <div style={{ margin: 24, fontSize: 24, fontWeight: 700, color: "#23c623" }}>
        Correct {correctCount}/{questions.length} questions!
      </div>
      <button onClick={handleRetry} style={{ padding: "12px 36px", background: "#1976d2", color: "white", border: 0, borderRadius: 5, fontWeight: 700, fontSize: 18, marginRight: 14 }}>Retry</button>
      <button onClick={handleReview} style={{ padding: "12px 36px", background: "#4bb3fa", color: "white", border: 0, borderRadius: 5, fontWeight: 700, fontSize: 18 }}>Review</button>
    </div>
  );
}