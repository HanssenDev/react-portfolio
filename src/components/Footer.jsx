import React from "react";
import Socials from "./Socials";
import { Container } from "react-bootstrap/";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <Container>
        <a href="#hero" className="back-to-top">
          <ArrowUpwardIcon fontSize="medium" />
        </a>
        <Socials />
        <p>
          &copy; <span className="name">Hanssen Ramanjooloo</span> {year}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
