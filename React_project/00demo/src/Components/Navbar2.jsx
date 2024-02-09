import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Geners" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fiction
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Non-Fiction</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Self-Help
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Book-Set
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
            <Nav.Link href="#link">Wish-List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;