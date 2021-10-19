import React from 'react'
import { Row, Button } from 'react-bootstrap'

const Blog = (props) => {
    const {title, photo_URL, description} = props.blog
    return (
        <Row className="mb-5 pb-4 border-bottom">
            <img className="mb-5" src={photo_URL} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="mt-3 d-flex justify-content-between align-items-center"><p>108 <span>Comments</span></p><Button variant="primary w-75">Continue Reading</Button></div>
        </Row>
    )
}

export default Blog
