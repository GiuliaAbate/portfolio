import React from "react";

//Import della funzione useNavigate 
import { useNavigate } from 'react-router-dom';

//Componenti
import Button from "../components/ui/Button";


function Homepage() {
    const navigate = useNavigate();

    //Funzioni di callback per gestire i pulsanti
    function callBackAbout() {
        navigate('About');
    }

    function callBackProjects() {
        navigate('Progetti');
    }

    function callBackCV() {
        const link = document.createElement('a');
        link.href = '/assets/giulia_abate_fullstackCV.pdf';
        link.download = 'giulia_abate_fullstackCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div className="presentazione">
                <h1>Ciao! Mi chiamo Giulia Abate</h1>
                <p>Sono una laureata in ICT interessata allo sviluppo web con una forte passione verso il digitale e le nuove tecnologie</p>
            </div>

            <div className="more-info">
                <h2>Scopri di più su di me e i miei lavori </h2>
                <div className="info-buttons">
                    <Button
                        label={'Chi sono'}
                        backgroundColor={'#CA7DF9'}
                        callback={callBackAbout}
                    />
                    <Button
                        label={'I miei progetti'}
                        backgroundColor={'#CA7DF9'}
                        callback={callBackProjects}
                    />
                    <Button
                        label={'Scarica CV'}
                        backgroundColor={'#CA7DF9'}
                        callback={callBackCV}
                    />
                </div>
            </div>
        </>
    );
}

export default Homepage;