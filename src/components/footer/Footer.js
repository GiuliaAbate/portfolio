import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


import './Footer.css';


function Footer(){
    return(
        <div className="footer">
            <div className="contatti">
            <a href="https://www.linkedin.com/in/giulia-abate-761236308/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#F896D8" />
            </a>
            <a href="https://github.com/GiuliaAbate">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#F896D8" />
            </a>
            
            <p>© Copyright 2024. Sito realizzato da Giulia Abate</p>
            </div>

        </div>
    );
}

export default Footer;