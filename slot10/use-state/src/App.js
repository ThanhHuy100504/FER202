import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/useState';
import { useState } from 'react';
import ProductList from './components/productList';
import SingleProductSelector from './components/SingleProductSelector';
function App() {
  const [name, setName] = useState('Thanh Huy');
  const [age, setAge] = useState(21);

  return (
    <>
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }} >
      <SingleProductSelector />
      </div>
  </>
  );
}
export default App;
