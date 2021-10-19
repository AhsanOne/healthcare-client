import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Blog from '../Blog/Blog'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs)
    return (
        <div className="my-5">
            <Container className="w-50">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </Container>
        </div>
    )
}

export default Blogs
