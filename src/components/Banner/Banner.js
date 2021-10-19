import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center">
            <Container>
                <Row>
                    <Col className="banner-info" md={6}>
                        <h1 className="text-primary fw-bold mb-4">
                            <span className="text-white">YOU AND</span><br /> YOUR DOCTOR
                        </h1>
                        <p className="text-white h6 lh-base mb-4">Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.
                        </p>
                        <Button href="#services" className="l1 rounded-pill px-3" variant="primary">VIEW OUR SERVICES</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
