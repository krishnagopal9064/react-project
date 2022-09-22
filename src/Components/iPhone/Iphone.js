import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style.css'
import IphoneHeader from "./IphoneHeader";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Iphone(props) {
    
  return (
    <div>
      <IphoneHeader />
      <div>
        <img className="iphone-img" src="../../../../images/iphone14img.png" alt="" />
        <img className="iphone-img" src="../../../../images/iphonese.png" alt="" />
      </div>
      <br /><br />
      <div>
      <Container>
        <h1 className="macparaheading2">Which iPhone is right for you ?</h1>
        <br />
        <Row xs={1} md={2} lg={4} xl={4}>
          {props.product.map((data) => (
            <Col key={data.prod_id}>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={data.prod_image} />
                <Card.Body>
                  <Card.Title>{data.prod_name}</Card.Title>
                  <Card.Text>From &#8377;{data.prod_price}*</Card.Text>
                  <Button onClick={()=>props.addtocart(data)} variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      <br />
      <div className="iphone-div3">
        <h1>Ways to buy Apple</h1><br /><br />
      <Container>
        <img className="iphone-img" src="../../../../images/iphonebuy1.png" alt="" />
        <img className="iphone-img" src="../../../../images/iphonebuy2.png" alt="" />

        <br /><br /><br /><br />
        <h1>Featured Accessories</h1><br /><br /><br />
        <img className="iphone-img" src="../../../../images/appleprod1.png" alt="" />
        <img className="iphone-img" src="../../../../images/appleprod2.png" alt="" />
        <img className="iphone-img" src="../../../../images/appleprod3.png" alt="" />
      </Container>
      </div>
      
    </div>
  );
}
