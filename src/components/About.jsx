import React from "react";
import { Container, Row } from "react-bootstrap/";
import { ReactComponent as ReactLogo } from "../assets/avatar.svg";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <Container>
        <Row md={2}>
          <div className="avatar-box">
            <ReactLogo />
          </div>
          <div className="about-box">
            <h4>Front-End Developer</h4>
            <p>
              Hi there! I'm <span className="name">Hanssen</span> and I'm a
              Self-Taught Front-End Developer based in London, UK.
            </p>
            <p>
              I decided to learn coding as a challenge and have thoroughly
              enjoyed it so far. The challenge that it presents keeps me engaged
              and it is now a hobby of mine to learn new technologies.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
