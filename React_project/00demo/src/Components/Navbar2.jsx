import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/navbarStyle.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar2() {
  return (
    <Navbar expand="lg" className="navbar-2">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Geners" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">Self-Help</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Manga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Fanatasy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;