import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LaptopList = () => {
  const [allLaptops, setAllLaptops] = useState([]);        // full list
  const [filteredLaptops, setFilteredLaptops] = useState([]); // filtered list
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops')
      .then(res => {
        setAllLaptops(res.data);
        setFilteredLaptops(res.data); // init = full list
      });
  }, []);

  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase();
    const filtered = allLaptops.filter(
      laptop =>
        laptop.brand.toLowerCase().includes(keyword) ||
        laptop.model.toLowerCase().includes(keyword)
    );
    setFilteredLaptops(filtered);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Laptop List</h2>
      <div className="d-flex mb-4">
        <Form.Control
          type="text"
          placeholder="Search by brand or model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button className="ms-2" onClick={handleSearch}>Search</Button>
      </div>

      <Row>
        {filteredLaptops.map(laptop => (
          <Col md={3} key={laptop.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={laptop.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year} <br />
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                <Button variant="info" onClick={() => navigate(`/laptops/${laptop.id}`)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LaptopList;