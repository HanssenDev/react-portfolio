import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Socials() {
  return (
    <ul className="social-links">
      <li>
        <a
          className="social-link linkedin"
          href="https://www.linkedin.com/in/hanssen-ramanjooloo/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon style={{ fontSize: 30 }} />
        </a>
      </li>
      <li>
        <a
          className="social-link github"
          href="https://github.com/HanssenDev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon style={{ fontSize: 30 }} />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
