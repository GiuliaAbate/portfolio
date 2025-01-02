import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss, faPhp, faJs, faAngular, faBootstrap, faJava, faWordpress, faReact, faFigma, faGitAlt  } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


function About(){
    return(
        <>
        <div className="container chi-sono">
        
            <div className="about-me col-xs-12 col-md-6 ">
                <h2>Chi sono</h2>
                <h3>Scopri di più su di me, la mia storia e le mie competenze</h3>
                <p>
                    Mi chiamo Giulia Abate, sono un Neolaureata in Innovazione Sociale, Comunicazione e Nuove Tecnologie all'università di Torino con una forte passione lo sviluppo front-end.
                    Sono una persona curiosa e interessata a scoprire nuove tecnologie e linguaggi di programmazione per migliorare sempre di più le mie abilità.
                    
                    <br></br><br></br>
                    Durante il mio percorso universitario ho svolto vari progetti, sia in gruppo che individuali, concentrati sulla realizzazione di siti web utilizzando diversi linguaggi tenendo in considerazione i principi di usabilità e accessibilità.
                    
                    <br></br><br></br>
                    Oltre all'informatica ho altri hobby e passioni come i videogiochi e l'interesse verso altre culture e lingue straniere.
                </p>
            </div>

            <div className="competenze col-xs-12 col-md-6">
                <h2>Competenze informatiche</h2>
                <div className="row">
                    <div className="linguaggi">
                        <div className="html">
                            <FontAwesomeIcon icon={faHtml5} />
                            <p>HTML</p>
                        </div>

                        <div className="css">
                            <FontAwesomeIcon icon={faCss} />
                            <p>CSS</p>
                        </div>

                        <div className="php">
                            <FontAwesomeIcon icon={faPhp} />
                            <p>PHP</p>
                        </div>

                        <div className="sql">
                            <FontAwesomeIcon icon={faDatabase} />
                            <p>MySQL</p>
                        </div>

                        <div className="js">
                            <FontAwesomeIcon icon={faJs} />
                            <p>Javascript</p>
                        </div>

                        <div className="jquery">
                            <p>Jquery</p>
                        </div>

                        <div className="angular">
                            <FontAwesomeIcon icon={faAngular} />
                            <p>AngularJS</p>
                        </div>

                        <div className="bootstrap">
                            <FontAwesomeIcon icon={faBootstrap} />
                            <p>BootStrap</p>
                        </div>

                        <div className="java">
                            <FontAwesomeIcon icon={faJava} />
                            <p>Java</p>
                        </div>

                        <div className="wp">
                            <FontAwesomeIcon icon={faWordpress} />
                            <p>Wordpress</p>
                        </div>

                        <div className="figma">
                            <FontAwesomeIcon icon={faFigma} />
                            <p>Figma</p>
                        </div>

                        <div className="react">
                            <FontAwesomeIcon icon={faReact} />
                            <p>React</p>
                        </div>

                        <div className="git">
                            <FontAwesomeIcon icon={faGitAlt} />
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    );
}

export default About;