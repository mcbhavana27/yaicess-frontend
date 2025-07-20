import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">YAICESS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5 text-center">
        <h1>Welcome to YAICESS</h1>
        <p className="lead">
          Your partner in innovative AI solutions. We're here to transform your ideas into reality.
        </p>
        <p>
          At YAICESS, we specialize in leveraging cutting-edge artificial intelligence to deliver intelligent solutions that drive growth and efficiency for your business.
        </p>
      </Container>
    </div>
  );
}

export default Home;