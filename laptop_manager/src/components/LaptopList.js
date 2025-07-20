import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './Navbar'

const LaptopList = () => {
  const [allLaptops, setAllLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops')
      .then(res => {
        setAllLaptops(res.data);
        setFilteredLaptops(res.data);
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
    <main>
      <NavbarComponent />
      <Container className="my-5">
        <h1 className="text-center mb-4">Laptop List</h1>
        {/* ✅ Carousel đẹp */}
        <Carousel className="mb-5 shadow rounded overflow-hidden" interval={3000} pause={false}>
  {allLaptops.slice(0, 3).map((laptop) => (
    <Carousel.Item key={laptop.id}>
      <img
        className="d-block w-100"
        src={laptop.image}
        alt={`${laptop.brand} ${laptop.model}`}
        style={{ height: '400px', objectFit: 'cover' }}
      />
      <Carousel.Caption>
        <div style={{ padding: '10px', borderRadius: '8px' }}>
          <h3>{laptop.brand} {laptop.model}</h3>
          <p>{laptop.year} – {laptop.price}</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>


        {/* Search form */}
        <section className="mb-4">
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-50"
            />
            <Button className="ms-2" onClick={handleSearch}>Search</Button>
          </Form>
        </section>

        {/* Laptop cards */}
        <section aria-label="Laptop List">
          <Row>
            {filteredLaptops.length > 0 ? (
              filteredLaptops.map(laptop => (
                <Col key={laptop.id} md={6} lg={4} xl={3} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={laptop.image}
                      alt={`${laptop.brand} ${laptop.model}`}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                      <Card.Text className="mb-2">
                        <strong>Year:</strong> {laptop.year}<br />
                        <strong>Price:</strong> {laptop.price}
                      </Card.Text>
                      <Button
                        variant="info"
                        className="mt-auto"
                        onClick={() => navigate(`/laptops/${laptop.id}`)}
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center mt-4">No laptops found matching your search.</p>
            )}
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default LaptopList;
