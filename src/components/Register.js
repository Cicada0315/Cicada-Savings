import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/sessions';

class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  };

  handleonChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    this.props.userPostFetch(this.state)
  };

  render() {
    return (
        <Card className="center">
            <h1 className="text-center">Register</h1>
            <div className="login-form">
                <Form onSubmit={this.handleSubmitLogin}>
                    <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" value={this.state.firstname} onChange={this.handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastname" value={this.state.lastname} onChange={this.handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleonChange} />
                    </Form.Group>
      
                    <Button variant="primary" type="submit">Register</Button>
                </Form>
            </div>
        </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: user => dispatch(userPostFetch(user))
})

export default connect(null, mapDispatchToProps)(Register);