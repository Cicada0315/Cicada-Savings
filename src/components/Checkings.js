import React from 'react';
import Checking from '../images/checking.jpg';
import icon24 from '../images/24-icon.jpg';
import iconnofee from '../images/no-fee.png';
import fdic from '../images/fdic.svg';
import { Card, Button, CardGroup, Row, Col } from 'react-bootstrap';

const Checkings=(props)=>{
    const currentUser=false;
    return (
        <div>
            <Card className="text-dark">
                <Card.Img src={Checking} alt="Card image" width="900" height="500"/>
                <Card.ImgOverlay>
                    <Card style={{ width: '18rem', float: 'right'}}>
                    <Card.Body>
                        <Card.Title>Free Checking Account</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">No minimuns, no fees, no worries</Card.Subtitle>
                        <Card.Text>
                        Why don't you start today?
                        </Card.Text>
                        {currentUser? (<a href="/checking/new"><Button variant="primary">Open Account</Button></a>): 
                        (<a href="/login"><Button variant="primary">Open Account</Button></a>)}
                    </Card.Body>
                    </Card>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <CardGroup>
            <Row>
            <Col>
                <Card>
                <Card.Img variant="top" src={icon24} height="247"/>
                <Card.Body>
                    <Card.Title>Online banking</Card.Title>
                    <Card.Text>
                    Almost anywhere, you can access your account.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img variant="top" src={iconnofee} height="247"/>
                <Card.Body>
                    <Card.Title>No minimuns, no fees</Card.Title>
                    <Card.Text>
                    Money will always stays where it belongs-with you.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img variant="top" src={fdic} height="247"/>
                <Card.Body>
                    <Card.Title>Secure and safe</Card.Title>
                    <Card.Text>
                    FDIC gurantee your money will be safe and secure.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                </Row>
            </CardGroup>
        </div>
    )
}
  
export default Checkings;