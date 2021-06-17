import React, { useState, useEffect } from 'react';
import Infocard from './Infocard';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import family1 from '../images/family1.jpg';

import '../CSS/MainContent1.css';

const MainContent=()=>{
    const [infocards, setInfocards] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:3001/infocards")
        .then(resp => resp.json())
        .then(infocards=> setInfocards(infocards))
         
        return ()=>{
          console.log("unmount");
        }
      }, []);
    
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
                {console.log(infocards)}
                {infocards.map(infocard=> <Infocard key={infocard.id} infocard={infocard}/>)}
            </CardGroup>
        </div>
    )
}

export default MainContent;