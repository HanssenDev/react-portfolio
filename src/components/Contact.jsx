import React from "react";
import { Container, Row, Button } from "react-bootstrap/";

function Contact() {
  return (
    <section id="contact">
      <div className="heading-box">
        <h2>Contact</h2>
      </div>
      <Container>
        <Row>
          <form method="POST">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="email" placeholder="Email Address"></input>
            <textarea rows="4" placeholder="Your Message"></textarea>
            <Button
              as="input"
              type="submit"
              value="SUBMIT"
              className="cta btn"
            />
          </form>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
