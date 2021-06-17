import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import MainContent from './components/MainContent';
import Checkings from './components/Checkings';
import Savings from './components/Savings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Container>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/checkings" component={() => <Checkings />} />
          <Route exact path="/savings" component={() => <Savings />} />
          <Route path="/" render={() => <MainContent />} />
          </Switch>
        </Router>
      </div>
      <Footer />
      </Container>
    );
  }
};

export default App;