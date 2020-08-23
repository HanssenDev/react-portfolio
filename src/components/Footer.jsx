import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Container } from "react-bootstrap/";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <Container>
        <ul>
          <li>
            <a
              className="social-links linkedin"
              href="https://www.linkedin.com/in/hanssen-ramanjooloo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              className="social-links github"
              href="https://github.com/HanssenDev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>
          </li>
        </ul>
        <p>
          &copy; <span className="name">Hanssen Ramanjooloo</span> {year}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
