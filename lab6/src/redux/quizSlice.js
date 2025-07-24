import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  questions: [
    {
      id: 1,
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['javascript', 'scripting', 'script', 'js'],
      correct: 2,
      userAnswer: null,
    },
    {
      id: 2,
      question: 'What are variables used for in JavaScript Programs?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these'
      ],
      correct: 0,
      userAnswer: null,
    },
    {
      id: 3,
      question: 'Which of the following can’t be done with client-side JavaScript?',
      options: [
        'Validating a form',
        'Sending a form’s contents by email',
        'Storing the form’s contents to a database file on the server',
        'None of the above'
      ],
      correct: 2,
      userAnswer: null,
    },
    {
      id: 4,
      question: 'Which event occurs when the user clicks on an HTML element?',
      options: ['onmouseclick', 'onchange', 'onclick', 'onmouseover'],
      correct: 2,
      userAnswer: null,
    },
    {
      id: 5,
      question: 'How do you write "Hello World" in an alert box?',
      options: [
        'msg("Hello World");',
        'alertBox("Hello World");',
        'alert("Hello World");',
        'msgBox("Hello World");'
      ],
      correct: 2,
      userAnswer: null,
    },
    {
      id: 6,
      question: 'How do you create a function in JavaScript?',
      options: [
        'function myFunction()',
        'function:myFunction()',
        'function = myFunction()',
        'def myFunction():'
      ],
      correct: 0,
      userAnswer: null,
    },
  ],
  reviewMode: false,
};
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      const { qid, answerIndex } = action.payload;
      const question = state.questions.find(q => q.id === qid);
      if (question) question.userAnswer = answerIndex;
    },
    setReviewMode(state, action) {
      state.reviewMode = action.payload;
    },
    resetQuiz(state) {
      state.questions.forEach(q => q.userAnswer = null);
      state.reviewMode = false;
    }
  },
});
export const { selectAnswer, setReviewMode, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;



