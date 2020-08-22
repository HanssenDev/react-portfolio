import React from "react";


function Nav() {

    return (
        <nav>
            <a href="#">&lt;Hanssen /&gt;</a>
            <ul className="nav-links">
                <li href="#" className="nav-item">About</li>
                <li href="#projects" className="nav-item">Projects</li>
                <li href="#" className="nav-item">Skills</li>
                <li href="#contact" className="nav-item">Contact</li>
            </ul>
        </nav>
    )
}

export default Nav;