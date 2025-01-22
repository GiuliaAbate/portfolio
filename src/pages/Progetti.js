import React from "react";
import { useNavigate } from 'react-router-dom';

//Bootstrap
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Progetti(){
  const navigate = useNavigate();

  //Array con i progetti 
  const projects = [
    { id: 1, title: "OnLibrary", image: "/assets/onlibrary.png", description: "Piattaforma online per la gestione delle biblioteche." },
    { id: 2, title: "Museo D'arte Orientale", image: "/assets/museo.png", description: "Sito web interattivo di un museo d'arte orientale" },
    { id: 3, title: "GameNect", image: "/assets/gamenect.png", description: "Piattaforma social per i videogiocatori italiani." },
    { id: 4, title: "Servizio di gestione di computer", description: "Applicazione per la gestione di computer, case produttrici, utilizzatori e servizi." },
  ]

  return (
    <div className="container mt-1">
      <h2 className="mb-3">I miei progetti</h2>
      <Row className="g-5 pl-5 ml-2 justify-content-center">

        {/*Si itera su ogni elemento dell'array e per ognuno si mostra un card strutturato nello stesso modo*/}
        {projects.map((project) => (
          <Col xs={12} sm={6} md={4} lg={4} key={project.id}>
            <Card className="card">
              <Card.Body>
                <Card.Img variant="top" src={project.image} />
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-desc">{project.description}</Card.Text>
                <Button
                  className="prjcts-button"
                  onClick={() => navigate(`/project/${project.id}`)} //Cliccando sul pulsante si naviga al progetto in base all'id
                >
                  Scopri di più
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>
    </div>
  );
}

export default Progetti;