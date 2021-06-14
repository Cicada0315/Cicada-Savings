import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <Container>
      <div className="App">
        <NavBar />
        <h1>Hello world</h1>
        
      </div>
      </Container>
    );
  }
};

export default App;