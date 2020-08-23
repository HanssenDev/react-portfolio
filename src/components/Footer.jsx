import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <ul>
        <li><a className="social-links" href="https://www.linkedin.com/in/hanssen-ramanjooloo/" rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a></li>
        <li><a className="social-links" href="https://github.com/HanssenDev" rel="noopener noreferrer" target="_blank"><GitHubIcon  /></a></li>
      </ul>
      <p>&copy; Hanssen Ramanjooloo {year}</p>
    </footer>
  );
}

export default Footer;
