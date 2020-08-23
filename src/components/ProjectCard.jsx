import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-img">
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          <img src={props.img} alt={props.description} />
        </a>
      </div>
      <div className="project-text">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className="project-skills">
        <ul>
          {props.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        <a
          className="project-link"
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Demo</div>
        </a>
        <a
          className="project-link"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>GitHub</div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
