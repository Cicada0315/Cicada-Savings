import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import family1 from '../images/family1.jpg';
import lock from '../images/lock.jpg';
import save from '../images/save.jpg';
import stock from '../images/stock.jpg';
import '../CSS/MainContent1.css';

const MainContent1= () =>{
    return(
        <div>
            <Card className="text-dark">
                <Card.Img src={family1} alt="Card image" width="900" height="500"/>
                <Card.ImgOverlay>
                    <Card style={{ width: '18rem', float: 'right', opacity: '.7'}}>
                    <Card.Body>
                        <Card.Title>Save now!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Better way to save your money</Card.Subtitle>
                        <Card.Text>
                        Cicada Savings offers you great interest rates, no monthly maintenance fees. 
                        <br />
                        Why don't you start save today?
                        </Card.Text>
                        <Card.Link href="/checkings">Checking</Card.Link>
                        <Card.Link href="/savings">Saving</Card.Link>
                    </Card.Body>
                    </Card>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={lock} height="247"/>
                    <Card.Body>
                        <Card.Title>FDIC Insurance</Card.Title>
                        <Card.Text>
                        Deposit insurance is one of the significant benefits of having an account at an FDIC-insured bank—it’s how the FDIC protects your money in the unlikely event of a bank failure.  Learn more about how Cicada Savings and the FDIC can protect your savings.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={save} />
                    <Card.Body>
                        <Card.Title>Savings 101</Card.Title>
                        <Card.Text>
                        Find out which Cicada Savings account matches with your short or long term savings plan.  We offer many different savings products that provide competitive APY, give you the interest you desrve and provides the convenience that you need.  Learn more about savings accounts.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={stock} height="247"/>
                    <Card.Body>
                        <Card.Title>Investing For Your Future</Card.Title>
                        <Card.Text>
                        Stocks, bonds and mutual funds are at your reach with our SIPC insured brokerage accounts.  Our helpful guides will help you get a running start on your long term investing goals.  Learn more about brokerage accounts.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        
    )
}

export default MainContent1;