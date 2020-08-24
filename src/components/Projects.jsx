import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects";
import { Container, Row } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects">
      <Container>
        <h2>Projects</h2>
        <Row className="projects-row">
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
    </section>
  );
}

export default Projects;
