// src/components/ProductList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', padding: '30px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white mb-0">Product List</h2>
        <Link to="/add">
          <Button variant="success" style={{ borderRadius: '20px' }}>
            + Thêm sản phẩm
          </Button>
        </Link>
      </div>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
            <Card className="text-center shadow-sm" style={{ borderRadius: '10px' }}>
              <div style={{ padding: '10px' }}>
                <Card.Img
                  variant="top"
                  src={`/images/${product.image}`}
                  style={{ height: '180px', objectFit: 'contain' }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-danger" style={{ fontWeight: 'bold' }}>
                  {product.name}
                </Card.Title>
                <Card.Text style={{ minHeight: '60px' }}>{product.description}</Card.Text>
                <p>
                  <del className="text-muted">{product.price} đ</del><br />
                  <span className="text-danger fw-bold">{product.currentPrice} đ</span>
                </p>
                <div className="d-flex justify-content-around">
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                    style={{ borderRadius: '20px', fontSize: '0.85rem' }}
                  >
                    Add to Cart
                  </Button>
                  <Link to={`/detail/${product.id}`}>
                    <Button variant="danger" style={{ borderRadius: '20px' }}>
                      View
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
