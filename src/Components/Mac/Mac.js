import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MacHeader from "./Mac_header";
import MacHeader2 from "./MacHeader2";

export default function Mac(props) {
  return (
    <div>
      <MacHeader />
      <MacHeader2 />
      <div className="mac-para4">
        <Container>
          <h1 className="macparaheading2">Which Mac is right for you ?</h1>
          <br />
          <Row xs={1} md={2} lg={4} xl={4}>
            {props.product.map((data) => (
              <Col key={data.prod_id}>
                <Card style={{ width: "15rem", marginTop: "10px" }}>
                  <Card.Img variant="top" src={data.prod_image} />
                  <Card.Body>
                    <Card.Title>{data.prod_name}</Card.Title>
                    <Card.Text>From &#8377;{data.prod_price}*</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => props.addtocart(data)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
          <img className="mac-new-image" src="../../../../images/mac-new1.jpg" alt="" />
          </Col>
          <Col>
          <img className="mac-new-image" src="../../../../images/mac-new2.jpg" alt="" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
          <img className="mac-new-image" src="../../../../images/mac-new3.jpg" alt="" />
          </Col>
          <Col>
          <img className="mac-new-image" src="../../../../images/mac-new-4.jpg" alt="" />
          </Col>
        </Row>
      </Container>
      <br /><br />
    </div>
  );
}
