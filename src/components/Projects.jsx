import React from "react";
import ProjectCard from "./ProjectCard"
import projects from "../projects";


function Projects() {

    return (
        <section id="projects">
        <h2>Projects</h2>
        {projects.map(project => 
        <ProjectCard 
            title={project.title}
            description={project.description}
            img={project.thumbnail}
            skills={project.technologies}
            github={project.githubURL}
            demo={project.demoURL}
        />)}
        </section>
    )
}

export default Projects;