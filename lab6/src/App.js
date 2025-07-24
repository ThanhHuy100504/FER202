import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import QuizReview from './components/QuizReview';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/quizzes" />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quiz/result" element={<QuizResult />} />
        <Route path="/quiz/review" element={<QuizReview />} />
        {/* Có thể thêm các page khác nếu muốn */}
      </Routes>
    </BrowserRouter>
  );
}
