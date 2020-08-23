import React from "react";

function Nav() {
  return (
    <nav>
      <a href="#hero">&lt;Hanssen /&gt;</a>
      <ul className="nav-links">
        <li>
          <a href="#about" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-item">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-item">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-item">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
