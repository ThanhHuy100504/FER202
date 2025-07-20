import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Container } from 'react-bootstrap';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h3>Shopping Cart</h3>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3"><strong>Total</strong></td>
              <td><strong>${total.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Cart;
