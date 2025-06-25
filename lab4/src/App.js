import React from 'react';
import { QuizProvider } from './context/QuizContext';
import QuizForm from './components/QuizForm';
import QuizList from './components/QuizList';
import QuizResult from './components/QuizResult';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <QuizProvider>
      <div className="container mt-4">
        <h2>React Quiz App with Hooks</h2>
        <QuizForm />
        <hr />
        <QuizList />
        <hr />
        <QuizResult />
      </div>
    </QuizProvider>
  );
}

export default App;
