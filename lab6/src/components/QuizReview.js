import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuiz } from '../redux/quizSlice';
export default function QuizReview() {
  const questions = useSelector(state => state.quiz.questions);
  const [selected, setSelected] = useState(0);
  const correctCount = questions.filter(q => q.userAnswer === q.correct).length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={{ maxWidth: 900, margin: '32px auto', background: '#fff', borderRadius: 10, boxShadow: '0 4px 32px #eee', padding: 36 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24, fontSize: 28 }}>Quiz Review</h2>
      {/* Review grid */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
        {questions.map((q, idx) => (
          <div
            key={q.id}
            style={{
              background: "#d7faee",
              borderRadius: 7,
              padding: "10px 16px",
              minWidth: 110,
              textAlign: "center",
              fontWeight: 500,
              cursor: "pointer",
              border: selected === idx ? "2.5px solid #1976d2" : "2px solid #a1e9d8",
              color: "#1976d2"
            }}
            onClick={() => setSelected(idx)}
          >
            <div>Question No {idx + 1}</div>
            <div>{q.userAnswer !== null ? "Answered" : "No answer"}</div>
          </div>
        ))}
      </div>
      {/* Chi tiết từng câu */}
      <div style={{
        marginBottom: 18,
        padding: 18,
        borderRadius: 10,
        background: questions[selected].userAnswer === questions[selected].correct ? '#e6ffed' : '#ffeaea'
      }}>
        <b>Q{selected + 1}. {questions[selected].question}</b>
        <div style={{ margin: "14px 0" }}>
          {questions[selected].options.map((opt, idx) => {
            let fontWeight = idx === questions[selected].correct ? 700 : 400;
            let color =
              idx === questions[selected].correct ? '#228B22' :
                questions[selected].userAnswer === idx && idx !== questions[selected].correct ? '#e53935' : '#444';
            return (
              <div key={idx} style={{ fontWeight, color, marginBottom: 4 }}>
                <input
                  type="radio"
                  checked={questions[selected].userAnswer === idx}
                  readOnly
                  style={{ marginRight: 8 }}
                />
                {opt}
                {idx === questions[selected].correct && ' (Correct)'}
              </div>
            );
          })}
        </div>
        <div>
          {questions[selected].userAnswer === questions[selected].correct ? (
            <span style={{ color: '#228B22', fontWeight: 600 }}>Your answer is correct!</span>
          ) : (
            <span style={{ color: '#e53935', fontWeight: 600 }}>
              Your answer: {questions[selected].userAnswer !== null ? questions[selected].options[questions[selected].userAnswer] : "No answer"}
              {" "}— Correct answer: {questions[selected].options[questions[selected].correct]}
            </span>
          )}
        </div>
      </div>
      <div style={{ margin: '24px 0', fontWeight: 700, fontSize: 18 }}>
        Correct {correctCount}/{questions.length} questions.
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            dispatch(resetQuiz());
            navigate('/quizzes');
          }}
          style={{ padding: "10px 32px", background: "#1976d2", color: "white", border: 0, borderRadius: 5, fontWeight: 700 }}
        >
          Back to Quiz
        </button>
      </div>
    </div>
  );
}



