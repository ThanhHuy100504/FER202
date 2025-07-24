import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productSlice';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.find(p => p.id === id));
  const [editing, setEditing] = React.useState(false);
  const [form, setForm] = React.useState(product || {});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateProduct(form));
    setEditing(false);
  };

  if (!product) return <p className="text-danger text-center mt-4">Sản phẩm không tồn tại.</p>;

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Header className="bg-dark text-white">
          <h4 className="mb-0">Chi tiết sản phẩm</h4>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4} className="text-center mb-3">
              <img
                src={`/images/${product.image}`}
                alt={product.name}
                className="img-fluid rounded"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
            </Col>
            <Col md={8}>
              {editing ? (
                <>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Tên sản phẩm</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Mô tả</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Giá gốc</Form.Label>
                          <Form.Control
                            type="text"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Giá khuyến mãi</Form.Label>
                          <Form.Control
                            type="text"
                            name="currentPrice"
                            value={form.currentPrice}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button variant="success" onClick={handleSave} className="me-2">
                      Lưu
                    </Button>
                    <Button variant="secondary" onClick={() => setEditing(false)}>
                      Huỷ
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <h5 className="text-danger fw-bold">{product.name}</h5>
                  <p>{product.description}</p>
                  <p>
                    <del className="text-muted">{product.price} đ</del>{' '}
                    <span className="fw-bold text-danger fs-5">{product.currentPrice} đ</span>
                  </p>
                  <Button variant="warning" onClick={() => setEditing(true)}>
                    Chỉnh sửa
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Link to="/">
            <Button variant="outline-primary">Quay lại danh sách</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProductDetail;
