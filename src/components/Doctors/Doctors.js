import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Doctor from '../Doctor/Doctor'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    // console.log(Doctors)
    return (
        <Container id="doctors" style={{marginTop:"81px"}}>
            <h1 className="my-5 text-center">Your Doctors</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </Row>
        </Container>
    )
}

export default Doctors
