import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice'; // ✅ Thêm import này

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', padding: '30px' }}>
      {/* Tiêu đề + nút thêm */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white mb-0">Product List</h2>
        <Link to="/add">
          <Button variant="success" style={{ fontWeight: '500', borderRadius: '20px' }}>
            + Thêm sản phẩm
          </Button>
        </Link>
      </div>

      {/* Danh sách sản phẩm */}
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
            <Card
              className="text-center shadow-sm"
              style={{
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                height: '100%',
              }}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  padding: '10px',
                }}
              >
                <Card.Img
                  variant="top"
                  src={`/images/${product.image}`}
                  style={{
                    height: '180px',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <Card.Body style={{ padding: '1rem' }}>
                <Card.Title
                  className="text-danger"
                  style={{ fontSize: '0.95rem', fontWeight: 'bold', minHeight: '45px' }}
                >
                  {product.name}
                </Card.Title>

                <Card.Text
                  style={{ fontSize: '0.85rem', minHeight: '70px', color: '#333' }}
                >
                  {product.description}
                </Card.Text>

                <p style={{ marginBottom: '10px' }}>
                  <span className="text-muted text-decoration-line-through">{product.price} đ</span><br />
                  <span className="text-danger fw-bold fs-5">{product.currentPrice} đ</span>
                </p>

                <div className="d-flex justify-content-center gap-2">
                  <Link to={`/detail/${product.id}`}>
                    <Button
                      variant="danger"
                      style={{ borderRadius: '20px', fontWeight: '500', fontSize: '0.85rem' }}
                    >
                      View Details
                    </Button>
                  </Link>

                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                    style={{ borderRadius: '20px', fontWeight: '500', fontSize: '0.85rem' }}
                  >
                    🛒 Add to Cart
                  </Button>
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
