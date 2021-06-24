import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import MainContent from './components/MainContent';
import Checkings from './components/Checkings';
import Savings from './components/Savings';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App=()=> {
  return (
    <Container>
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/checkings" component={() => <Checkings />} />
        <Route exact path="/savings" component={() => <Savings />} />
        <Route exact path="/register" component={() => <Register />} />
        <Route path="/" render={() => <MainContent />} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  ); 
};

export default App;