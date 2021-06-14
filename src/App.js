import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import Checkings from './containers/Checkings';
import Savings from './containers/Savings';

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
          <Route path="/" render={() => <h1>Hello world</h1>} />
          </Switch>
        </Router>
      </div>
      </Container>
    );
  }
};

export default App;