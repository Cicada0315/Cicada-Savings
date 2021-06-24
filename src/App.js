import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Checkings from './components/Checkings';
import Savings from './components/Savings';
import CheckingForm from './components/Form/CheckingForm'
import Auth from './components/Form/Auth'

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
        <Route exact path="/login" component={() => <Auth />} />
        <Route exact path="/checkings" component={() => <Checkings />} />
        <Route exact path="/checkings/new" component={() => <CheckingForm />} />
        <Route exact path="/savings" component={() => <Savings />} />
        <Route path="/" render={() => <MainContent />} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  ); 
};

export default App;