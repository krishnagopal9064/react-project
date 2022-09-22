import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Thankyou() {
  return (
    <div>
        <Container>
            <div className="thankyou">
                <h5>Thank you for shopping with us. We will send you the update about your order.</h5>
            </div>
            <Nav.Link as={Link} to='/'><Button>Back to Home</Button></Nav.Link>
        </Container>
        <br /><br /><br />
    </div>
  )
}
