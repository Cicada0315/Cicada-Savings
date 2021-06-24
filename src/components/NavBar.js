import React from 'react'
import Cicada from '../images/Cicada.jpg';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar=()=>{
    return(
        <Container>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={Cicada} width="30" height="30" alt="logo"/> CicadaSavings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/checkings">Checking</Nav.Link>
                    <Nav.Link href="/savings">Savings</Nav.Link>
                </Nav>

                <Nav>
                    <Navbar.Text>
                    <Nav.Link href="/login"><Button variant="primary">Log In</Button></Nav.Link>
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
        </Container>   
    )
}

export default NavBar