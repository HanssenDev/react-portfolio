import React from "react";


function ProjectCard(props) {

    return (
        <div>
            <div className="project-title">
                <h3>{props.title}</h3>
            </div>
            <div className="project.description">
                <p>{props.description}</p>
            </div>
            <div className="project-img">
                <img src={props.img} alt={props.description} />
            </div>
            <div className="project-skills">
                <ul>
                {props.skills.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
            <div className="project-links">
                <a href={props.demoURL}>Demo</a>
                <a href={props.githubURL}>GitHub</a>
            </div>
        </div>
    )
}

export default ProjectCard;