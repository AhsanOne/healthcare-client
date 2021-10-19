import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';



const Register = () => {
    const auth = getAuth()
    const { handleGoogleSignIn } = useAuth()
    const [users, setUsers] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleIsRegister = (e) => {
        setIsRegister(e.target.checked)
    }

    const handleEmailPasswordSignIn = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserName()
                setUsers(user)
            })
    }
    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        })
    }

    return (
        <div className="mt-5">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <Form>
                            <legend className="text-primary h2 mb-3 text-center">Please {isRegister ? "Login" : "Register"}</legend>
                            {
                                !isRegister && <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onBlur={handleName} type="text" placeholder="Write your name" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            }

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} required type="email" placeholder="Enter your email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} required type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={handleIsRegister} type="checkbox" label="Already Register" />
                            </Form.Group>
                            {
                                isRegister ? <Button onClick={handleLoginWithEmailAndPassword} className="w-100" variant="primary" type="submit">Login</Button> : <Button onClick={handleEmailPasswordSignIn} className="w-100" variant="primary" type="submit">Register</Button>
                            }
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col sm={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <span style={{ height: "1px", width: '100%', border: "1px solid #cccccc" }}></span>
                            <span style={{ whiteSpace: "nowrap", margin: "0 8px 2px" }}>or use one of these options
                            </span>
                            <span style={{ height: "1px", width: '100%', border: "1px solid #cccccc" }}></span>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <div className="d-flex justify-content-center mt-4">
                            <button onClick={handleGoogleSignIn} className="border-dark border-1 bg-white mx-4 px-4 py-3">
                                <svg viewBox="0 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" aria-hidden="true" focusable="false" width="24" height="24" role="img"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register
