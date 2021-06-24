import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { Navbar, Nav, Button } from 'react-bootstrap';
import Cicada from '../images/Cicada.jpg';

const NavBar=()=>{
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('userinfo')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout=(e)=>{
        dispatch({type: 'SIGN_OUT'});
        history.push('/auth');
        setUser(null);
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userinfo')));
    }, [location]);
    
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={Cicada} width="30" height="30" alt="logo"/> CicadaSavings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/checkings">Checking</Nav.Link>
                    <Nav.Link href="/savings">Savings</Nav.Link>
                </Nav>

                <Nav>
                {!user?(
                    <Navbar.Text>
                    <Nav.Link href="/login"><Button variant="primary">Sign In</Button></Nav.Link>
                    </Navbar.Text>):(
                    <Navbar.Text>
                    <Nav.Link href="/"><Button onClick={logout} variant="primary">Sign out</Button></Nav.Link>
                    </Navbar.Text>)
                }
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    )
}

export default NavBar