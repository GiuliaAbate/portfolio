import React from "react";

import  {useNavigate} from 'react-router-dom';

//Componenti
import Button from "../components/ui/Button";


function Homepage(){
    const navigate= useNavigate();

    function callBackAbout(){
        navigate('About');
    }

    function callBackProjects(){
        navigate('Progetti');
    }

    return(
        <>
        <div className="presentazione">
            <h1>Ciao! Mi chiamo Giulia Abate</h1>
            <p>Sono una neolaureata in ICT interessata allo sviluppo front-end e con una forte passione verso il digitale e le nuove tecnologie</p>
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
                </div>
        </div>
        </>
    );
}

export default Homepage;