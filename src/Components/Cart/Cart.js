import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Table, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(props.cart);
  }, [props.cart]);
  return (
    <div>
      <br />
      <br />
      <Container>
        <Nav.Link as={Link} to='/payment'><Button
          style={{ float: "right" }}
          variant="primary"
          onClick={() => props.checkout(CART)}
        >
          Proceed to checkout
        </Button></Nav.Link>
        <br /><br />
        <Row>
          <Col>
            <h1 style={{ float: "left" }}>Cart Items</h1>
          </Col>
          <Col>
            <h5 style={{ float: "right", marginTop: "20px" }}>
              Total Cart Value:
              {CART.map((item) => item.prod_price * item.quantity).reduce(
                (total, value) => total + value, 0
              )}
            </h5>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td className="cart-table">Product Name</td>
              <td className="cart-table">Product Price</td>
              <td className="cart-table">Product Quantity</td>
              <td className="cart-table">Product Image</td>
              <td className="cart-table">Total Price</td>
            </tr>
          </thead>
          <tbody>
            {CART?.map((data) => (
              <tr key={data.prod_id}>
                <td className="cart-table2">{data.prod_name}</td>
                <td className="cart-table2">{data.prod_price}</td>
                <td className="cart-table2">
                  <button
                    className="quantity-button"
                    onClick={() => {
                      const _CART = CART.map((item) => {
                        return data.prod_id === item.prod_id
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 0 ? item.quantity - 1 : 0,
                            }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                  {data.quantity}
                  <button
                    className="quantity-button"
                    onClick={() => {
                      const _CART = CART.map((item) => {
                        return data.prod_id === item.prod_id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                </td>
                <td className="cart-table2">
                  <img
                    className="cart-image"
                    style={{ height: "50px", width: "50px" }}
                    src={data.prod_image}
                    alt=""
                  />
                </td>
                <td className="cart-table2">
                  {data.prod_price * data.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
