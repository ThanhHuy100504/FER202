import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Navbar, Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Redux Shopping Cart</Navbar.Brand>
        </Container>
      </Navbar>
      <ProductList />
      <Cart />
    </>
  );
};

export default App;
