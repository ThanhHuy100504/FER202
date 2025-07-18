import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, setUser }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const foundUser = response.data.find(
        (u) => u.username === username && u.password === password
      );
      if (foundUser) {
        setUser(foundUser);
        setShowModal(true);
      } else {
        alert('Invalid username or password!');
      }
    } catch (error) {
      alert('Error fetching user accounts');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            value={username} 
            onChange={onUsernameChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={onPasswordChange} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
      <Modal show={showModal} onHide={() => setShowModal(false) }>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, {username} login Successful!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShowModal(false); navigate('/laptops'); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
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