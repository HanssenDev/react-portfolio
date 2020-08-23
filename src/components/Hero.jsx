import React from "react";
import Button from "react-bootstrap/Button"

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="intro">
        <p>Hi, my name is</p>
        <h1>Hanssen Ramanjooloo</h1>
        <p>and I'm a Front-End Developer</p>
        <Button variant="primary" className="cta"><a href="#projects">Projects</a></Button>
      </div>
    </section>
  );
}

export default Hero;
