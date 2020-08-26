import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <Container>
        <div className="heading-box">
          <h2>Projects</h2>
          <span className="big-heading">Projects</span>
        </div>
        <Row className="projects-row">
          {projects.map((project) => (
            <Col md={6} lg={4}>
              <Fade bottom>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  img={project.thumbnail}
                  skills={project.technologies}
                  github={project.githubURL}
                  demo={project.demoURL}
                />
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
