import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Modal, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, setUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please enter username and password!');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/UserAccounts', {
        timeout: 5000,
      });

      const foundUser = response.data.find(
        (u) =>
          u.username === username &&
          u.password === password &&
          u.status === 'active'
      );

      if (foundUser) {
        setUser(foundUser);
        setShowModal(true);
      } else {
        setError('Invalid username or password!');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid username or password!');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/laptops');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={onUsernameChange}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Enter password"
            />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, {username} login Successful!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
