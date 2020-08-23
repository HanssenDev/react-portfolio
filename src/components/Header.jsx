import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#" className="logo">
            <span className="logo-tag">&lt;</span>
            <span>Hanssen</span>
            <span className="logo-tag"> /&gt;</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link className="cta" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
