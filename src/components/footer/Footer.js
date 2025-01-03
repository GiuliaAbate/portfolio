import React from "react";
import './Footer.css';

/*Icone del footer*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div className="footer">
            <div className="contatti">
                <a href="https://www.linkedin.com/in/giulia-abate/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="#F896D8" className="icon-footer"/>
                </a>
                
                <a href="https://github.com/GiuliaAbate">
                    <FontAwesomeIcon icon={faGithub} size="2x" color="#F896D8" className="icon-footer"/>
                </a>
                
                <p>© Copyright 2025. Sito realizzato da Giulia Abate</p>
            </div>

        </div>
    );
}

export default Footer;