import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../data";
import { Jquery } from "@icons-pack/react-simple-icons";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="heading-box">
        <h2>Skills</h2>
        <span className="big-heading">Skills</span>
      </div>
      <Container>
        <Row>
          {/* Map through skills array in data.js and render a skill icon and text using the data */}
          {skills.map((skill, index) => {
            return (
              <Col xs={6} md={4} key={index}>
                <Fade bottom>
                  <div className="skills-container">
                    <FontAwesomeIcon icon={skill.icon} size="4x" />
                    <p>{skill.title}</p>
                  </div>
                </Fade>
              </Col>
            );
          })}
          <Col xs={6} md={4}>
            <Fade bottom>
              <div className="skills-container">
                <Jquery size="64" />
                <p>jQuery</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
