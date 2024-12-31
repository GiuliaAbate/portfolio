import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBar() {
    return (
        <Navbar expand="lg" sticky="top" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="title">
                    Giulia Abate
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/About">Chi sono</Nav.Link>
                        <Nav.Link as={Link} to="/Progetti">Progetti</Nav.Link>
                        <Nav.Link as={Link} to="/Contatti">Contatti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
