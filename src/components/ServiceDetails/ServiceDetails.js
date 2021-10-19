import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './ServiceDetails.css'

const ServiceDetails = () => {
    let { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    const [service, setService] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    // console.log(serviceDetails)
    useEffect(() => {
        if (serviceDetails.length) {
            const findService = serviceDetails.find(service => service.id === parseInt(serviceId))
            setService(findService)
        }
    }, [serviceDetails])
    console.log(service)

    return (
        <div className="mt-5">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <img className="service-details-image" src={service.photo_URL} alt="" />
                        <h2 className="my-3">{service.title}</h2>
                        <p>{service.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServiceDetails
