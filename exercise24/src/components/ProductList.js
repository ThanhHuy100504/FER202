import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateQuantity, deleteFromCart } from '../redux/cartSlice';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const sampleProducts = [
  {
    id: '123456',
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '456789',
    name: 'Another Product',
    price: 14.99,
    description: 'This is another product.',
    catalogs: ['catalog3'],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <h3>Product List</h3>
      <Row>
        {sampleProducts.map(product => (
          <Col md={6} lg={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                <Card.Text><strong>Catalogs:</strong> {product.catalogs.join(', ')}</Card.Text>
                <Button variant="success" size="sm" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>{' '}
                <Button variant="warning" size="sm" onClick={() => dispatch(updateQuantity({ id: product.id, quantity: 2 }))}>Update (x2)</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => dispatch(deleteFromCart(product.id))}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
