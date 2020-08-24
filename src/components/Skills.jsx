import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../data";
import { Jquery } from "@icons-pack/react-simple-icons";

function Skills() {
  return (
    <section id="skills">
      <div className="heading-box">
        <h2>Skills</h2>
      </div>
      <Container>
        <Row>
          {skills.map((skill, index) => {
            return (
              <Col lg={4} xs={6} key={index}>
                <div className="skills-container">
                  <FontAwesomeIcon icon={skill.icon} size="4x" />
                  <p>{skill.title}</p>
                </div>
              </Col>
            );
          })}
          <Col lg={4} xs={6}>
            <div className="skills-container">
              <Jquery size="64" />
              <p>Jquery</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
