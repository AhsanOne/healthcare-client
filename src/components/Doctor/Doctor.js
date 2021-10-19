import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import './Doctor.css'

const Doctor = (props) => {
    const {name, photo_URL, specialty} = props.doctor

    return (
        <Col>
            <Card  className="h-100 doctor-card border-0 text-center">
                <div><Card.Img className="doctor-image" variant="top" src={photo_URL} /></div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <b>Specialty :</b> {specialty}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Doctor
