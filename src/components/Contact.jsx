import React from "react";
import { Container, Row } from "react-bootstrap/";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <Container>
        <Row>
          <form method="POST">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="email" placeholder="Email Address"></input>
            <textarea rows="4" placeholder="Your Message"></textarea>
            <input type="submit" value="SUBMIT"></input>
          </form>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
