import React from "react";
import { Container, Row } from "react-bootstrap/";
import { ReactComponent as Avatar } from "../assets/myAvatar.svg";

function About() {
  return (
    <section id="about">
      <Container>
        <div className="heading-box">
          <h2>About Me</h2>
        </div>
        <Row md={2}>
          <div className="avatar-box">
            <Avatar className="avatar" />
          </div>
          <div className="about-box">
            <h4>Front-End Developer</h4>
            <p>
              Hi there! I'm <span className="name">Hanssen</span> and I'm a
              self-taught Front-End Developer based in London, UK.
            </p>
            <p>
              I decided to learn coding as a challenge and I've thoroughly
              enjoyed it so far. The challenge that it presents keeps me engaged
              and eager to learn more.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
