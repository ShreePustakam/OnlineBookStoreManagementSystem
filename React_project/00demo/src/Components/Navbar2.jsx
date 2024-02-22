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
              <NavDropdown.Item href="#selfhelp">Self-Help</NavDropdown.Item>
              <NavDropdown.Item href="#manga">Manga</NavDropdown.Item>
              <NavDropdown.Item href="#fantasy">Fanatasy</NavDropdown.Item>
              <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#fantasy">Fanatasy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/home" style={{marginLeft:50}}>Home</Nav.Link>
            <Nav.Link href="/aboutus" style={{marginLeft:50}}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;