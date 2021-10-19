import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const Appoinment = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <h1 className="my-5 text-center">Book Your Appoinment</h1>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone Number" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="date">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Select Doctor</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Select...</option>
                                        <option>Dr. William A.</option>
                                        <option>Dr. Myles. B</option>
                                        <option>Dr. Fouad. M.</option>
                                        <option>Dr. Khalid Abbed</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Select Deperetment</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Select...</option>
                                        <option>Laboratory Analysis</option>
                                        <option>Dental Care</option>
                                        <option>Outpatient Surgery</option>
                                        <option>Physical Therapy</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Book Appoinment
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Appoinment
