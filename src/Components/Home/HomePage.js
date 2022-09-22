import React from "react";
import "bootstrap";
import "./style.css";
import {Carousel,Container} from 'react-bootstrap';
import {IoIosArrowForward} from 'react-icons/io'

export default function HomePage() {
  return (
    <div>
      <div className="header_para">
        <Container>
        <p>Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900.‡ <span style={{color:'#0066cc'}}> &nbsp;<a style={{textDecoration:'none'}} href="/">Learn more<IoIosArrowForward /></a></span></p>
        </Container>
        </div>
        <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="carousel_image"
              src="../../../images/carousel1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel_image"
              src="../../../images/carousel2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel_image"
              src="../../../images/carousel3.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel_image"
              src="../../../images/carousel4.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel_image"
              src="../../../images/carousel5.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="carousel_image"
              src="../../../images/carousel6.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home_outer1">
      <img
              className="home_image2"
              src="../../../images/iphone13.jpg"
              alt="First slide"
            />
      </div>
      <div className="home_outer2">
      <img
              className="home_image2 homeimage2"
              src="../../../images/iphone13pro.jpg"
              alt="First slide"
            />
      </div>
      <div className="home_outer3">
      <img
              className="home_image2"
              src="../../../images/macipad.jpg"
              alt="First slide"
            />
      </div>
      <div className="home_outer4">
      <img
              className="home_image1"
              src="../../../images/appleevent.jpg"
              alt="First slide"
            />
      </div>
      <div className="home_outer5">
      <img
              className="home_image1"
              src="../../../images/mac.jpg"
              alt="First slide"
            />
      </div>
      <div className="home_outer6">
        <img
              className="home_image1"
              src="../../../images/airpods.jpg"
              alt="First slide"
            />
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------- */}
      
    </div>
  );
}
