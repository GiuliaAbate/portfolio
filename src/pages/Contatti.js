import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Button } from "react-bootstrap";

//import { useNavigate } from "react-router-dom";


function Contatti(){
    /*const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate("/Success")
    }*/

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
                <form name="contact" method="POST" action="/ConfermaInvio" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact"  />
                    <div className="input-container">
                        <label>Nome</label>
                        <input type="text" name="name" />

                        <br></br>

                        <label>Email</label>
                        <input type="email" name="email"/>

                        <br></br><br></br>
                    </div>

                    <div>
                        <label>Messaggio</label>
                        <br></br>
                        <textarea name="messaggio" />
                    </div>
                    <br></br><br></br>
                    <Button type="submit" name="sumbit" className="contact-button">Invia</Button>
                </form>
            </div>
        </div>
    );
}

export default Contatti;