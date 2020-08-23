import React from "react";
import { Button, Container } from "react-bootstrap/";

function Hero() {
  return (
    <div>
      <section id="hero" className="hero">
        <Container>
          <div className="intro">
            <p>Hi, my name is</p>
            <h1>Hanssen Ramanjooloo</h1>
            <p>and I'm a Front-End Developer</p>
            <Button variant="primary" className="cta">
              <a href="#projects">Projects</a>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Hero;
