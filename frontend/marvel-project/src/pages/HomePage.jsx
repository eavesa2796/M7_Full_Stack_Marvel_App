// Import React and required Bootstrap components
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// Import navigation hook from React Router
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // useNavigate lets us programmatically route users to different pages
  const navigate = useNavigate();

  return (
    // Centered container with margin at the top
    <Container className="text-center mt-5">
      {/* Page heading */}
      <h1 className="mb-4">Marvel Character Manager</h1>

      {/* Introductory text */}
      <p className="mb-5">
        Create, view, and edit your favorite Marvel heroes and villains!
      </p>

      {/* Image carousel showcasing characters */}
      <Carousel className="mb-5">
        <Carousel.Item>
          {/* First slide - Spider-Man */}
          <img
            className="d-block w-100"
            src="spider-man-image.jpg"
            alt="Spider-Man"
            height="400"
          />
          <Carousel.Caption>
            <h3>Spider-Man</h3>
            <p>With great power comes great responsibility.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* Second slide - Loki */}
          <img
            className="d-block w-100"
            src="loki-image.jpg"
            alt="Loki"
            height="400"
          />
          <Carousel.Caption>
            <h3>Loki</h3>
            <p>God of Mischief and part-time villain.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* Third slide - Iron Man */}
          <img
            className="d-block w-100"
            src="/iron-man-image.jpg"
            alt="Iron Man"
            height="400"
          />
          <Carousel.Caption>
            <h3>Iron Man</h3>
            <p>Genius, billionaire, playboy, philanthropist.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Row of buttons for navigating to character views/forms */}
      <Row className="justify-content-center">
        {/* View Characters Button */}
        <Col xs="auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/characters")}
          >
            View Characters
          </Button>
        </Col>

        {/* Add Character Button */}
        <Col xs="auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/characters/add")}
          >
            Add Character
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
