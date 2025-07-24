import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, setReviewMode, resetQuiz } from '../redux/quizSlice';
import { useNavigate } from 'react-router-dom';


export default function Quiz() {
  const questions = useSelector(state => state.quiz.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = questions.length;
  const q = questions[currentQuestionIndex];


  const handleSelect = (qid, idx) => {
    dispatch(selectAnswer({ qid, answerIndex: idx }));
  };


  // Khi Submit chuyển tới trang kết quả
  const handleSubmit = () => {
    dispatch(setReviewMode(true));
    navigate('/quiz/result');
  };


  const goFirst = () => setCurrentQuestionIndex(0);
  const goPrev = () => setCurrentQuestionIndex(idx => Math.max(idx - 1, 0));
  const goNext = () => setCurrentQuestionIndex(idx => Math.min(idx + 1, totalQuestions - 1));
  const goLast = () => setCurrentQuestionIndex(totalQuestions - 1);


  return (
    <div style={{ maxWidth: 800, margin: '32px auto', background: '#fff', borderRadius: 10, boxShadow: '0 4px 32px #eee', padding: 36 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24, fontSize: 28 }}>JavaScript Quiz</h2>
      <div style={{ textAlign: 'right', marginBottom: 16 }}>
        <b>Question {currentQuestionIndex + 1}/{totalQuestions}</b>
      </div>
      <div>
        <b>Q{currentQuestionIndex + 1}. {q.question}</b>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, margin: '16px 0 6px 0' }}>
          {q.options.map((opt, idx) => {
            let style = {
              padding: "16px 22px",
              border: '1.5px solid #ccc',
              borderRadius: 8,
              minWidth: 180,
              background: q.userAnswer === idx ? "#e1f2ff" : "#f6fafd",
              cursor: 'pointer',
              fontWeight: q.userAnswer === idx ? 600 : 400,
              fontSize: "1rem"
            };
            return (
              <div
                key={idx}
                style={style}
                onClick={() => handleSelect(q.id, idx)}
              >
                {opt}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ margin: '28px 0 12px 0', textAlign: 'center', gap: 12, display: 'flex', justifyContent: 'center' }}>
        <button onClick={goFirst} disabled={currentQuestionIndex === 0}>First</button>
        <button onClick={goPrev} disabled={currentQuestionIndex === 0}>Prev</button>
        <button onClick={goNext} disabled={currentQuestionIndex === totalQuestions - 1}>Next</button>
        <button onClick={goLast} disabled={currentQuestionIndex === totalQuestions - 1}>Last</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button style={{ padding: "12px 40px", background: "#1976d2", color: "white", border: 0, borderRadius: 5, fontWeight: 700, fontSize: 18 }}
          onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}