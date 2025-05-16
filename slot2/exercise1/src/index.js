import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NamePerson from './NamePerson'
import PersonDetail from './PersonDetail'
import PeopleTable from './PeopleTable'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson /> 
    <PersonDetail />
    <PeopleTable />
  </React.StrictMode>
);


reportWebVitals();
