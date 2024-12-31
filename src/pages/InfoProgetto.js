import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function InfoProgetto() {
  const { id } = useParams(); // Ottieni l'id dalla rotta

  const InfoProgetto = {
    1: {
      title: "OnLibrary",
      description: 
      <> 
        <strong>OnLibrary</strong> è una piattaforma digitale per la gestione di prenotazioni di libri che permette agli utenti di registrarsi, visualizzare un catalogo e la scheda libro per ogni libro.
        Gli utenti registrati possono prenotare il libro desiderato e in seguito gestire le proprie prenotazioni grazie alla dashboard dedicata. L'amministratore è unico e può gestire il catalogo, aggiungendo e modificando libri. 
        <br></br><br></br>
        L'obiettivo è stato quello di realizzare un sito dinamico che consenta agli utenti registrati di accedere a funzionalità esclusive e di memorizzare i contenuti del sito su database.
        
        <br></br><br></br>

        <h3 style={{color: "#F896D8"}}>Tecnologie utilizzate:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>

        <br></br>

        <Button 
        className="link-button"
        href="https://github.com/GiuliaAbate/OnLibrary"
        >
          Codice del progetto
        </Button>
      </>,
      image: "/assets/onlibrary-php.gif",
    },
    2: {
      title: "Museo d'Arte Orientale",
      description: 
      <>
        Si tratta di un sito dedicato ad un <strong>Museo D'Arte Orientale</strong> che contiene al suo interno informazioni come la storia del museo, alcune delle opere più importanti e le mostre in corso.
        Il sito contiene anche dei form dedicati all'iscrizione alla newsletter, acquisto dei biglietti e prenotazione di visite guidate gestiti dal punto di vista del front-end trattando la loro validazione con messaggi di successo e di campi invalidi.
        <br></br><br></br>
        L'obiettivo è stato quello di realizzare un sito front-end completo, accessibile e responsive.
        <br></br><br></br>
        <h3 style={{color: "#F896D8"}}>Tecnologie utilizzate:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>BootStrap</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>AngularJS</li>
        </ul>

        <br></br>

        <Button 
        className="link-button"
        href="https://github.com/GiuliaAbate/Museo_Arte_Orientale"
        >
          Codice del progetto
        </Button>
      </>,
      image: "/assets/museo-orientale.gif",
    },
    3: {
      title: "GameNect",
      description: 
      <>
        <strong>GameNect</strong> è una piattaforma dedicata ai videogiocatori italiani e pensata per offrire loro un unico luogo di discussione 
        dove i membri della community potranno condividere dei loro contenuti, interagire con quelli degli altri utenti con la possibilità di commentare, mettere mi piace e seguirli.
        Il sito dà la possibilità di personalizzare il proprio profilo personale, partecipare a gruppi di discussione separati per genere di videogioco e pubblicare dei propri articoli destinati a tre categorie: news, recesioni e guide.

        <br></br><br></br>
        Questo progetto ha costituito il mio lavoro di tesi e per la sua realizzazione sono stati seguiti i principi dell'Interaction Design come la raccolta e definizione dei requisiti, 
        con un'attenzione sull'analisi degli utenti a cui è rivolto il servizio tramite la raccolta di dati tramite un questionario.
        Oltre alla fase di ricerca sono stati trattati anche la realizzazione di un prototipo ad alta fedeltà e interattivo con conseguente sua valutazioni con utenti, per poi prosesguire con l'implementazione del sito ideato.
        <br></br><br></br>
        L'obiettivo finale è stato quello di realizzare un sito che vada a rispondere alle esigenze degli utenti alla quale è rivolto. 
        Per la sua implementazione si è utilizzato il CMS WordPress che con i suoi plugin e temi ha permesso la realizzazione di un sito completo e funzionante con tutte le funzionalità pensate.

        <br></br><br></br>

        <Button 
        className="link-button"
        href="https://github.com/GiuliaAbate/GameNect"
        >
          Codice del progetto
        </Button>

      </>,
      image: "/assets/gamenect-tesi.gif",
    },
  };

  const project = InfoProgetto[id];

  return (
    <div className="container mt-4">
      <h1>{project.title}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="descrizione">
            <p>{project.description}</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={project.image} alt={project.title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
  
}

export default InfoProgetto;