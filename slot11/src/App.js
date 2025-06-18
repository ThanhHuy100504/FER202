import logo from './logo.svg';
import './App.css';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordForm from './components/EmailPasswordForm';
import FullValidationForm from './components/FullValidationForm';

function App() {
  return (
    <>
    <FullValidationForm />
    <hr />
    <EmailPasswordForm />
    <hr />
    <ValidatedInput />
    </>
  );
}

export default App;
