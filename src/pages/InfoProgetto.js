import React from "react";

//Si import useParams per gestire in modo dinamico la pagina del singolo progetto
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function InfoProgetto() {
  const { id } = useParams(); //Si ottiene l'id

  //Informazioni dei singoli progetti
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

          <h3 style={{ color: "#F896D8" }}>Tecnologie utilizzate:</h3>
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
            target="_blank"
          >
            Codice progetto
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
          <h3 style={{ color: "#F896D8" }}>Tecnologie utilizzate:</h3>
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
            target="_blank"
          >
            Codice progetto
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

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              className="link-button"
              href="https://github.com/GiuliaAbate/GameNect"
              target="_blank"
            >
              Codice progetto
            </Button>
            <br></br>
            <Button
              className="link-button"
              href="https://www.figma.com/design/3I8T3k6gdsZQ1zjTIcPFOl/GameNect?node-id=0-1&t=J0yb7EBbhvJNGxRk-1"
              target="_blank"
            >
              Prototipo
            </Button>
          </div>
        </>,
      image: "/assets/gamenect-tesi.gif",
    },

    4: {
      title: "RideWild",
      description:
        <>
          <strong>RideWild</strong> è una piattaforma di compravendita di biciclette e altri prodotti legati al mondo ciclistico,
          con una parte del sito visibile da utenti registrati e non dove posoono guardare tra i prodotti disponibili, vedere le informazioni di dettaglio,
          filtrare i prodotti e cercarli.
          Gli utenti registrati possono inoltre aggiungere i prodotti al carrello e ai preferiti, lasciare recensioni, acquistare i prodotti
          e vedere il proprio profilo personale con le proprie informazioni.
          L'altra parte del sito è riservata all'admin principale e ai dipendenti che possono appartenere a due categorie: logisistica o magazzino,
          in questa sezione si ha una dashboard che mostra dei dati riguardo l'andamento delle vendite e pagine per la gestione dei prodotti, dipendenti e ordini compiuti dagli utenti.

          <br></br><br></br>
          Questo progetto è stato il risultato del mio percorso di formazione come FullStack Developer presso Betacom
          dove il focus principale è stato quello di presentare le varie fasi del
          ciclo di vita del software e creare progetti in ambito Net Core/ C#, per il lato Back End e in ambito Angular per il lato Front End.

          <br></br><br></br>

          <h3 style={{ color: "#F896D8" }}>Tecnologie utilizzate:</h3>
          <ul>
            <li>C# .NET con Entity Framework</li>
            <li>Angular 18</li>
            <li>SQL Server</li>
            <li>Mongo DB</li>
          </ul>
        </>,
      image: "/assets/ridewild-preview.gif",
    },

    5: {
      title: "BetaUni",
      description:
        <>
          <strong>BetaUni</strong> è un portale universitario dedicato ad un'università fittizia pensata per gestire in modo semplice ed efficace tutte le principali attività universitarie,
          con un’attenzione particolare alle esigenze di studenti, professori e visitatori esterni.
          Gli utenti non registrati possono navigare  nella parte pubblica del sito, scoprendo la storia dell’università, la sua offerta formativa e le modalità di iscrizione.
          La homepage propone in evidenza alcune facoltà e cliccando su ciascuna è possibile accedere a una pagina di dettaglio con informazioni sui corsi, i laboratori, gli esami collegati, i professori e le aule.

          <br></br><br></br>
          Si ha una distinzione tra utenti che si registrano ovvero in base al ruolo di professore o studente.
          Una volta registrato e autenticato, lo studente può gestire in autonomia il proprio percorso di studi. Può selezionare corsi e laboratori in base alla propria facoltà, iscriversi agli esami (solo se relativi ai corsi scelti) e consultare in ogni momento il proprio piano di studi. È prevista anche la possibilità di modificare le informazioni personali e di disiscriversi da corsi, laboratori o esami.
          Mentre i docenti nella loro area riservata possono  selezionare i corsi e i laboratori a cui insegnare, visualizzare gli studenti iscritti alle proprie attività e consultare il proprio elenco di insegnamenti. Anche per loro è disponibile la gestione del profilo personale.

          <br></br><br></br>
          <h3 style={{ color: "#F896D8" }}>Tecnologie utilizzate:</h3>
          <ul>
            <li>C# .NET con Entity Framework</li>
            <li>Angular 18</li>
            <li>SQL Server</li>
          </ul>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              className="link-button"
              href="https://github.com/GiuliaAbate/BetaUniBE"
              target="_blank"
            >
              Codice BackEnd
            </Button>

            <Button
              className="link-button"
              href="https://github.com/GiuliaAbate/BetaUniFE"
              target="_blank"
            >
              Codice FrontEnd
            </Button>
          </div>
        </>,
      image: "/assets/betauni-preview.gif"
    },

    6: {
      title: "Servizio di gestione di computer",
      description:
        <>
          L'applicazione è un servizio dedicato alla gestione di computer tramite una struttura orientata agli oggetti.
          Questo progetto comprende classi per rappresentare dei computer con anche sottoclassi specifiche, utilizzatori, case produttrici e servizi.

          <br></br><br></br>
          La classe principale, Computer, definisce attributi come ID, marca e valore, con sottoclassi come Computer Privato e Computer Tavolo. Altre classi includono Persona, per gli utilizzatori, e Case Produttrici, per i produttori.
          La gestione dei computer è affidata a Computer Service e Computer ServiceList, che usano rispettivamente array e ArrayList, mentre Yellow Pages la mappa città e servizi tramite HashMap.
          I metodi definiti in queste classi sono stati testati nel main per verificarne il funzionamento
          <br></br><br></br>

          <h3 style={{ color: "#F896D8" }}>Tecnologie utilizzate:</h3>
          <ul>
            <li>Java</li>
          </ul>

          <br></br>

          <Button
            className="link-button"
            href="https://github.com/GiuliaAbate/Servizio_Gestione_Computer"
            target="_blank"
          >
            Codice progetto
          </Button>
        </>,

      image: null,
    },
  };

  const project = InfoProgetto[id]; //Si utilizza l'id per visualizzare le info

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
          {project.image && (
            <img src={project.image} alt={project.title} className="img-fluid" />
          )}
        </div>
      </div>
    </div>
  );

}

export default InfoProgetto;
