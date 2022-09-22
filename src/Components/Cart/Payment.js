import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './style.css'

export default function Payment(props) {
  return (
    <div>
        <div>
          <Container className='payment-outer'>
            <Row>
              <Col className='payment-inner'>
              <h4>Enter full address</h4>
              <hr />
              <input type="text" placeholder='Recipient Name' />
              <input type="number" placeholder='Contact No.' />
              <input type="text" placeholder='House No.' />
              <input type="text" placeholder='PIN' />
              <input type="text" placeholder='Landmark' />
              <input type="text" placeholder='City' />
              <input type="text" placeholder='District' />
              <input type="text" placeholder='State'/>
              </Col>
              <Col className='payment-inner2'>
              <h4>Enter Payment Details</h4>
              <hr />
              <input type="text" placeholder='UPI ID@' style={{width:'68%'}} /> or <br />
              <select name="" id="">
                <option value=""> -- Select Card Type -- </option>
                <option value="">Credit Card</option>
                <option value="">Dabit Card</option>
              </select>
              <select name="" id="">
                <option value=""> -- Select Card -- </option>
                <option value="">Visa</option>
                <option value="">Mastercard</option>
                <option value="">RuPay</option>
                <option value="">Others</option>
              </select>
              <input type="number" placeholder='Card Number'/>
              <input type="text" placeholder='Expiry Date' />
              <input type="text" placeholder='CVV' />
              <input type="text" placeholder='Card Holder Name' />
              </Col>
            </Row>
            <br /><br />
            <Nav.Link as={Link} to='/thankyou'> <Button>Place Order</Button></Nav.Link>
          </Container>
        </div>
    </div>
  )
}
