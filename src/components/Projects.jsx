import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects";
import { Container, Row, Jumbotron } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects">
      <Jumbotron>
        <Container>
          <h2>Projects</h2>
          <Row>
            {projects.map((project) => (
              <ProjectCard
                title={project.title}
                description={project.description}
                img={project.thumbnail}
                skills={project.technologies}
                github={project.githubURL}
                demo={project.demoURL}
              />
            ))}
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default Projects;
