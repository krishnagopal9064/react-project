import React from 'react'
import { Container } from 'react-bootstrap'

export default function Support() {
  return (
    <div><br />
        <Container className='support-outer'>
          <h1>Feel free to Contact us or give Feedback</h1><br />
          <center>
          <form action="">
            <input className='support-input' type="text" placeholder='Name' />
            <input className='support-input' type="email" name="" id="" placeholder='Email' />
            <input className='support-input' type="number" placeholder='Contact No.' />
            <input className='support-input' type="text" placeholder='Topic' />
            <textarea className='support-input' name="" id="" cols="30" rows="4" placeholder='Your Valuable Feedback'></textarea>
            <a className='support-input2' href='/support' style={{textDecoration:'none'}}>Submit</a>
          </form>
          </center>
        </Container>
    </div>
  )
}
