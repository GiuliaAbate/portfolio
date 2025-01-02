import React from "react";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Button } from "react-bootstrap";


function ConfermaInvio(){
    const navigate = useNavigate();

    return(
        <div className="container contact-me">
            <div className="recapiti col-xs-12 col-md-6">
                <h2>I miei contatti</h2>

                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/giulia-abate-761236308/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#EDF67D" />
                    </a>
                                
                    <h4>Giulia Abate</h4>
                </div>

                <div className="icon-container">
                    <a href="https://github.com/GiuliaAbate">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#EDF67D" />
                    </a>

                    <h4>Giulia Abate</h4>
                </div>

                <div className="icon-container">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color="#EDF67D" />
                    <h4>giulia.abate1101@gmail.com</h4>
                </div>
            </div>

            <div className="form-contatto col-xs-12 col-lg-6">
                <h3 className="conferma"> Il tuo messaggio è stato inviato correttamente!</h3>
                <Button className="contact-button" onClick={() => navigate(`/`)}>Homepage</Button>
            </div>
        </div>
    );
}

export default ConfermaInvio;