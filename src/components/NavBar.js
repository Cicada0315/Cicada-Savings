import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Cicada from '../images/Cicada.jpg';
import '../CSS/NavBar.css';

//client Side Routing
import {
    Link
} from "react-router-dom";

function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={Cicada} width="30" height="30" alt="logo"/> CicadaSavings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/checkings">Checking</Nav.Link>
                <Nav.Link href="/savings">Savings</Nav.Link>
                
                <Link to="/login">
                <Button className="buttons" variant="primary">Log In</Button>
                </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>       
    )
}

export default NavBar