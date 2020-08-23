import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../projects";

function Skills() {
  return (
    <section id="skills">
      <Jumbotron>
        <h2>Skills</h2>
        <Container>
          <Row>
            {skills.map((skill) => {
              return (
                <Col lg={4} xs={6}>
                  <div className="skills-container">
                    <FontAwesomeIcon icon={skill.icon} size="4x" />
                    <p>{skill.title}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default Skills;
