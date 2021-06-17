import React from 'react'
import Card from 'react-bootstrap/Card';

const Infocard= (props) =>{
    const {title, image_url, summary} =props.infocard
    return(
        <Card>
            <Card.Img variant="top" src={image_url} height="247"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {summary}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Infocard;