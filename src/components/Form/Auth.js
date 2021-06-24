import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/sessions'


const Auth = () => {
    const [isSignup, setSignup]=useState(false);
    const [inputs, setInputs]=useState({ firstname: '', lastname: '', username: '', password: '', cpassword: '' });
    const history = useHistory();
    const dispatch = useDispatch()

    const swichMode= (e) => {
        setSignup((prev)=> !prev);
    };

    const handleonChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignup){
            dispatch(signup(inputs, history));         
        }else{
            dispatch(signin(inputs, history));
        }
    };

    return (
        <Card className="center">
            <h1 className="text-center">{isSignup ? 'Sign up': 'Sign In'}</h1>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                        <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" value={inputs.firstname} onChange={handleonChange} />
                        </Form.Group>

                        <Form.Group controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" value={inputs.lastname} onChange={handleonChange} />
                        </Form.Group>
                        </>
                    )}
                    <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={inputs.username} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={inputs.password} onChange={handleonChange} />
                    </Form.Group>

                    {isSignup && (
                        <>
                        <Form.Group controlId="cpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword" value={inputs.cpassword} onChange={handleonChange} />
                        </Form.Group>
                        </>
                    )}
                    
                    <Button variant="primary" type="submit">{isSignup ? 'Sign up': 'Sign In'}</Button><br/>
                    <p onClick={swichMode}>{isSignup ? 'Already have an account? Sign In': "Don't have account? Sign up"}</p><br/>
                </Form>
            </div>
        </Card>
    )
}

export default Auth