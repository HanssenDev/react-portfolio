import React from "react";

const year = new Date().getFullYear();

function Footer() {

    return (
        <footer>
            <ul>
                <li></li>
                <li></li>                
            </ul>
            <p>&copy; Hanssen Ramanjooloo {year}</p>
        </footer>
    )
}

export default Footer;