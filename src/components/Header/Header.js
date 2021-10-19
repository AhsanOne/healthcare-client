import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'
import './Header.css'

const Header = () => {
    const {user, handleSignOut} = useFirebase()
    return (
        <Navbar className="navbar" variant="light" expand="md">
            <Container>
                <Navbar.Brand className="fw-bold" as={Link} to="/home">Ahsan<span className="text-primary">Hospital</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className="me-4" href="#features">BLOG</Nav.Link>
                        <Nav.Link className="text-primary">{user.displayName}</Nav.Link>
                        {
                            user.email ? <Nav.Link onClick={handleSignOut}className="text-white btn btn-primary btn-sm px-3 l1" >LOGOUT</Nav.Link> : <Nav.Link as={Link} className="text-white btn btn-primary btn-sm px-3 l1" to="/register">REGISTER</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
