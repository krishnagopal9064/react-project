import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaAppleAlt, FaUserCircle } from "react-icons/fa";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import {BsBag, BsBookmark,BsBoxSeam} from 'react-icons/bs'
import {TbSettings} from 'react-icons/tb'
// import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  let nevigate=useNavigate()
  const isAuth=window.sessionStorage.getItem('TokenValue:')
  const logout=()=>{
    window.sessionStorage.clear()
    nevigate('/')
  }
  return ( 
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="nav_body">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            <Navbar.Brand as={Link} to="/">
              <FaAppleAlt className="nav_logo" />
            </Navbar.Brand>
          </Nav>
          <Navbar.Collapse id="responsive-navbar-nav nav-text-body">
            <Nav className="me-auto ">
              <Nav.Link as={Link} to="/mac" className="nav_link_text">
                Mac
              </Nav.Link>
              <Nav.Link as={Link} to="/iphone" className="nav_link_text">
                iPhone
              </Nav.Link>
              <Nav.Link as={Link} to="/accessories" className="nav_link_text">
                Accessories
              </Nav.Link>
              <Nav.Link as={Link} to="/store" className="nav_link_text">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/support  " className="nav_link_text">
                Support
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="/" className="nav_link_text_icon">
              <BiSearch />
            </Nav.Link>
          </Nav>
          <div className="dropdown">
            <button className="dropbtn"><BiShoppingBag /></button>
            <div className="dropdown-content">
              <Nav.Link as={Link} to="/cart"><BsBag/> &nbsp;&nbsp;Bag <span style={{color:'blue', fontSize:'10px'}}>{props.count}</span></Nav.Link>
              <hr />
              <Nav.Link as={Link} to="/"><BsBookmark/> &nbsp;&nbsp;Saved Item</Nav.Link>
              <hr />
              <Nav.Link as={Link} to="/"><BsBoxSeam/> &nbsp;&nbsp;Orders</Nav.Link>
              <hr />
              {isAuth?
              <Nav.Link onClick={logout}>Logout</Nav.Link>
              :
              <><Nav.Link as={Link} to="/login"><TbSettings style={{ fontSize: "17px" }} /> &nbsp;&nbsp;Account</Nav.Link><hr /><Nav.Link as={Link} to="/register"><FaUserCircle /> &nbsp;&nbsp;Create Account</Nav.Link></>
              }
              </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
