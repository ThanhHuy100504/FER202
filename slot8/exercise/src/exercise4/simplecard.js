// components/SimpleCard.jsx
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import CardImage from './image.js';
import CardInfo from './description.js';

const SimpleCard = () => {
  return (
    <div className="p-3">
      <h4>4. Create Simple Card</h4>
      <p>This is a common pattern seen around the web. Facebook messages, Tweets, and so on:</p>

      <div className="d-flex justify-content-center">
        <Card className="shadow-sm w-100" style={{ maxWidth: '800px' }}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <CardImage />
              </Col>
              <Col md={6}>
                <CardInfo />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SimpleCard;
