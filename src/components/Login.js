import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/Login.css';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleSubmitLogin = (e) => {
    e.preventDefault();
  };

  handleonChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
        <Card className="center">
            <h1 className="text-center">LogIn</h1>
            <div className="login-form">
                <Form onSubmit={this.handleSubmitLogin}>
                    <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleonChange} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">Login</Button><br/>
                    
                    <Link to="/register">Forgot Username or Password?</Link><br/>
                    <Link to="/register">Create account</Link>
                </Form>
            </div>
        </Card>
    );
  }
}

export default Login;