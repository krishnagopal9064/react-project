import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";

export default function MacHeader2() {
  return (
    <div>
         <div className="mac-heading-2">
        <p>
          Save on Mac for university with an Apple education discount. Plus get
          AirPods.{" "}
          <span style={{ color: "#0066cc" }}>
            {" "}
            &nbsp;
            <a style={{ textDecoration: "none" }} href="/">
              Shop Now
              <IoIosArrowForward />
            </a>
          </span>
        </p>
      </div>
      <div className="mac-para2">
        <Container>
          <Row>
            <Col className="macbookairpara">
              <p className="macbookairpara1">New</p>
              <h1 className="macbookairparah1">MacBook Air</h1>
              <h2>Don't take it lightly.</h2>
              <br />
              <p>From &#8377;119900.00*</p>
              <button className="macbookairbutton1">Buy</button>
              <button className="macbookairbutton2">Learn More</button>
            </Col>
            <Col>
              <img
                className="macbookairimage"
                src="../../../../images/macbookair.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mac-para3">
        <Container>
          <Row>
            <Col>
              <img
                className="macbookairimage2"
                src="../../../../images/macbookpro.jpg"
                alt=""
              />
            </Col>
            <Col className="macbookairpara2">
              <p className="macbookairpara1">New</p>
              <h1 className="macbookairparah1">MacBook Pro 13"</h1>
              <h2>Pro anywhere.</h2>
              <br />
              <p>From &#8377;119900.00*</p>
              <button className="macbookairbutton1">Buy</button>
              <button className="macbookairbutton2">Learn More</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
