import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {FaUserCircle} from 'react-icons/fa'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Store() {
  return (
    <div>
      <div className="store_para1">
        <Container>
          <p>
            Get 5% instant Cashback up to ₹6,000 with qualifying HDFC Bank
            credit cards on orders over ₹54,900.§§ Plus 6 months No Cost EMI
            with qualifying credit cards from most leading banks.§
            <span style={{ color: "#0066cc" }}>
              &nbsp;
              <a style={{ textDecoration: "none" }} href="/">
                Learn more
                <IoIosArrowForward />
              </a>
            </span>
          </p>
        </Container>
      </div>
      <div>
      <div className="store_outer1">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="store_div1">
                <h1 className="store_heading1">
                  Store.
                  <span className="store_heading2">
                    The best way to buy the products you love.
                  </span>
                </h1>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="store_div2">
                <Row>
                  <Col>
                  <FaUserCircle className="store_icon2"/>
                  </Col>
                  <Col>
                <span className="store_heading3">Need Shopping Help?</span>
                <div style={{clear:'both'}}></div>
                <span className="store_heading4"><a style={{textDecoration:'none'}} href="/">Ask a Specialist</a></span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
        <Row className="store_new_icons">
          <Col>
            <a as={Link} to="/mac" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="../../../../images/mac-icon.jpg"
                alt="mac"
                className="icon-image"
              />
              <p>Mac</p>
            </a>
          </Col>
          <Col>
            <a as={Link} to="/iphone" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="../../../../images/iphone-icon.jpg"
                alt="mac"
                className="icon-image"
              />
              <p>iPhone</p>
            </a>
          </Col>
          
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="../../../../images/airtag-icon.jpg"
                alt="mac"
                className="icon-image"
              />
              <p>AirTag</p>
            </a>
          </Col>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="../../../../images/applitv-icon.jpg"
                alt="mac"
                className="icon-image"
              />
              <p>Apple TV</p>
            </a>
          </Col>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="../../../../images/homepod-icon.jpg"
                alt="mac"
                className="icon-image"
              />
              <p>HomePod Mini</p>
            </a>
          </Col>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="../../../../images/accessories-icon.jpg"
                alt="mac"
                className="icon-image"
              />
              <p>Accessories</p>
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className="store_heading5">
          The latest.{" "}
          <span className="store_heading5_span">
            Take a look at what's new right now.
          </span>
        </h2>
        <br />
        <br />

        <Row>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <div className="store-card-big1">
                <p className="store-card-p">PRE-ORDER FROM 9TH SEPTEMBER</p>
                <h2>iPhone14</h2>
                <h2>Big and bigger</h2>
                <h4>From &#8377;79900.00</h4>
              </div>
            </a>
          </Col>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <div className="store-card-big2">
                <p className="store-card-p">PRE-ORDER FROM 9TH SEPTEMBER</p>
                <h2>iPhone14</h2>
                <h2>Big and bigger</h2>
                <h4>From &#8377;79900.00</h4>
              </div>
            </a>
          </Col>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <div className="store-card-big3">
                <p className="store-card-p">PRE-ORDER FROM 9TH SEPTEMBER</p>
                <h2>iPhone14</h2>
                <h2>Big and bigger</h2>
                <h4>From &#8377;79900.00</h4>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <h2 className="store_heading6">
          Help is here. Whenever and however you need it.
        </h2>
        <br />
        <Row>
          <Col>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <div className="store-card-big4">
                <h2 className="store_heading7">
                  Shop one on one with a <br /> Specialist online
                </h2>
              </div>
            </a>
          </Col>
          
          <Col>
            <Row>
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                <div className="store-card-big5">
                  <h2 className="store_heading7">
                    Get to know your new device with <br /> a free personal
                    session.
                  </h2>
                </div>
              </a>
            </Row>
            <Row>
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                <div className="store-card-big6">
                  <h2 className="store_heading7">
                    Service and Spport.
                    <br /> We are here to help.
                  </h2>
                </div>
              </a>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      </div>
      </div>
      
    </div>
  );
}
