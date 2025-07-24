import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  const thumbnails = [
    '/images/menu-01.jpg',
    '/images/menu-02.jpg',
    '/images/menu-03.jpg',
    '/images/menu-04.jpg',
    '/images/menu-05.jpg',
  ];

  return (
    <Container fluid className="p-0">
      {/* Slide 3 ảnh */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide1.jpg"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide2.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide3.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>

      {/* Hình tròn nhỏ bên dưới */}
      <Row className="justify-content-center mt-4 mb-5">
        {thumbnails.map((src, index) => (
          <Col xs="auto" key={index} className="text-center px-3">
            <Image
              src={src}
              roundedCircle
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                boxShadow: '0 0 8px rgba(0,0,0,0.2)',
              }}
              alt={`thumb-${index}`}
            />
          </Col>
        ))}
      </Row>
            {/* Dòng chữ tiêu đề */}
      <div className="text-center mt-3">
        <h3 style={{ color: 'crimson' }}>This is Home Page</h3>
      </div>
    </Container>
  );
};

export default Home;