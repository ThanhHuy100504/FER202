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
   <Counter />
   <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => {setName(e.target.value);
            console.log(e.target.value)
          }} 
        />
        <p>My name is {name}</p>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(parseInt(e.target.value, 10))} 
        />
        <p>My age is {age}</p>
      </div>
      <ProductList />
      <SingleProductSelector />
      </div>
  </>
  );
}
export default App;
