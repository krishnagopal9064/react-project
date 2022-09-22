import React from 'react'
import 'bootstrap'
import './style.css'
import {IoIosArrowForward} from 'react-icons/io'
import {BsBoxSeam} from 'react-icons/bs'
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import {RiWechatLine} from 'react-icons/ri'
import {Row, Col} from 'react-bootstrap'

export default function Footer_mobile() {
  return (
    <div>
        <div className="footer_outer">
          <div className="container">
            <br /><br />
            <h1 className='footer_heading'>Why Apple is the best <br/> place to buy your iPhone.</h1>
            <p className="footer_button">Learn More <IoIosArrowForward/></p>

            <div>
              <Row>
                <Col xs={12} sm={12} md={6} xl={6} className='footer_body2'>
                  <h3 className='footer_heading2'>Trade in your smartphone for credit.</h3>
                  <p>With Apple Trade In, you can get credit towards a new iPhone when you trade in an eligible smartphone.5 It’s good for you and the planet.</p>
                  <p className="footer_button2">Learn More <IoIosArrowForward/></p>
                </Col>
                <Col xs={12} sm={12} md={6} xl={6} className='footer_body2'>
                  <h3 className='footer_heading2'>Still have questions? Just ask.</h3>
                  <p>You won’t find a better place to buy iPhone. We know about carriers, payment options and more. And we make it easy to understand.</p>
                  <p className="footer_button2">Learn More <IoIosArrowForward/></p>
                </Col>
              </Row>
              <br />
              <hr />
              <br /><br />
            </div>
            <div>
              <Row>
              <Col xs={12} sm={12} md={4} xl={4} className='footer_body3'>
                <BsBoxSeam className='footer_icon3'/>
              </Col>
              <Col xs={12} sm={12} md={4} xl={4} className='footer_body3'>
              <HiOutlineCurrencyRupee className='footer_icon4'/>
              </Col>
              <Col xs={12} sm={12} md={4} xl={4} className='footer_body3'>
              <RiWechatLine className='footer_icon5'/>
              </Col>
              </Row>
            </div>

          </div>
        </div>
    </div>
  )
}
