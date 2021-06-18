import React from 'react'
import Cicada from '../images/Cicada.jpg';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import '../CSS/NavBar.css';

const NavBar=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={Cicada} width="30" height="30" alt="logo"/> CicadaSavings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/checkings">Checking</Nav.Link>
                <Nav.Link href="/savings">Savings</Nav.Link>
                <Nav.Link href="/login"><Button className="buttons" variant="primary">Log In</Button></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>       
    )
}

export default NavBar