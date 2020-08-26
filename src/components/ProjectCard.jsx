import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-img">
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          <img src={props.img} alt={props.description} />
        </a>
      </div>
      <div className="project-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="project-skills">
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        <a
          className="project-link github"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            GitHub <GitHubIcon style={{ fontSize: 20 }} />
          </div>
        </a>
        <a
          className="project-link demo"
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            Demo <LaunchIcon style={{ fontSize: 20 }} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
