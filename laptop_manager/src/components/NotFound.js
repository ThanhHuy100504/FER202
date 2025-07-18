// src/components/NotFound.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4">404</h1>
          <p className="lead">Oops! The page you are looking for was not found.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Go to Login Page
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
