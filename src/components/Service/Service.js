import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import './Service.css'

const Service = (props) => {
    const {title, photo_URL, description, id} = props.service
    const history = useHistory()
    const handleViewDetails = () => {
        history.push(`/services/${id}`)
    }

    return (
        <Col>
            <Card  className="h-100 service-card">
                <div className="thumb-animate"><Card.Img className="service-thumbnails" variant="top" src={photo_URL} /></div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 85)}
                    </Card.Text>
                    <Button onClick={handleViewDetails} className="w-100">View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Service
