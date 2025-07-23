import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  deleteFromCart,
  addOrUpdateToCart,
} from '../redux/cartSlice';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  return (
    <Container className="mt-4">
      <h3>Product List</h3>
      <Row>
        {products.map(product => (
          <Col md={6} lg={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Card.Text>
                  <strong>Catalogs:</strong> {product.catalogs.join(', ')}
                </Card.Text>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>{' '}
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() =>
                    dispatch(addOrUpdateToCart({ product, quantity: 2 }))
                  }
                >
                  Update (x2)
                </Button>{' '}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(deleteFromCart(product.id))}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
