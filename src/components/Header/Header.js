import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'

const Header = () => {
    return (
        <Navbar className="navbar" variant="light" expand="md">
            <Container>
                <Navbar.Brand className="fw-bold" href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#features">ABOUT</Nav.Link>
                        <Nav.Link className="me-4" href="#features">BLOG</Nav.Link>
                        <Nav.Link className="text-white btn btn-primary btn-sm px-3 l1" href="#pricing">REGISTER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
