import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <ul>
        <li><LinkedInIcon /></li>
        <li><GitHubIcon /></li>
      </ul>
      <p>&copy; Hanssen Ramanjooloo {year}</p>
    </footer>
  );
}

export default Footer;
