import React from "react";
import Socials from "./Socials";
import { Container } from "react-bootstrap/";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <Container>
        <Socials />
        <p>
          &copy; <span className="name">Hanssen Ramanjooloo</span> {year}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
