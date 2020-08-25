import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap/";
import emailjs from "emailjs-com";


function Contact() {
  // Create State object for inputs
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Store input data into State object
  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  // Check if the form is valid i.e. not empty
  const isFormValid = () => {
    if (!values.name || !values.email || !values.message) {
      return false;
    } else {
      return true;
    }
  };

  // If form is valid, then send email and clear input fields
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.log("Please try again.");
    } else {
      sendEmail(e);
      setValues({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  // Send email via emailjs
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "gmail",
        "portfolio_message",
        e.target,
        "user_71MILfk9pL8nz1eX6bh7K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="heading-box">
        <h2>Contact</h2>
        <span className="big-heading">Contact</span>
      </div>
      <Container>
        <Row>
          <form
            id="contact-form"
            onSubmit={(e) => handleSubmit(e)}
            method="POST"
          >
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={values.name}
              placeholder="Name"
              required
            ></input>
            <input
              onChange={handleChange}
              type="text"
              id="email"
              name="email"
              value={values.email}
              placeholder="Email Address"
              required
            ></input>
            <textarea
              onChange={handleChange}
              rows="4"
              id="message"
              name="message"
              value={values.message}
              placeholder="Your Message"
              required
            ></textarea>
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
