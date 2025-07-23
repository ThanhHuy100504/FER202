import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../redux/productSlice';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      catalogs: formData.catalogs.split(',').map(c => c.trim()),
    };
    dispatch(addProductAsync(newProduct)).then(() => {
      navigate('/');
    });
  };

  return (
    <Container className="mt-4">
      <h3>Add Product</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>ID</Form.Label>
          <Form.Control value={formData.id} required onChange={e => setFormData({ ...formData, id: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control value={formData.name} required onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={formData.price} required onChange={e => setFormData({ ...formData, price: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Description</Form.Label>
          <Form.Control value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Catalogs (comma-separated)</Form.Label>
          <Form.Control value={formData.catalogs} onChange={e => setFormData({ ...formData, catalogs: e.target.value })} />
        </Form.Group>
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
