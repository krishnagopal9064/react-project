import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import './login.css'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {FiArrowUpRight} from 'react-icons/fi'

export default function Login() {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log("Submitted Value : ", value);
    
  const user={
    email : value.email,
    password : value.password
  }
  Axios.post('https://node-api-by-krishna.herokuapp.com/login',user)
  .then((res)=>{
    console.log("Axios res: ",res.data);
    window.sessionStorage.setItem("TokenValue:",res.data.token)
    alert("Login successful")
    navigate('/cart')
  })
  .catch((err)=>{
    console.log('Axios err',err);
    alert('Wrong Password or Email')
  })
},
});

  return (
    <>
      <div className="login_background">
        <div className="login_outer">
          <Container className="login_inner">
            <h3 className="login-heading">Signin to Apple Store</h3>
            <br />
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="Apple ID"
                  name="email"
                  className="input"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
                {formik.touched.email && formik.errors.email?<span className="errmsg">{formik.errors.email}</span>:null }
                <br />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
                {formik.touched.password && formik.errors.password?<span className="errmsg">{formik.errors.password}</span>:null }
                <br />
              </div>
              <label> <input type="checkbox" name="rememberme"/> Remember me </label> <br /><br />
              <center>
                <div className="button_submit">
                  <button type="submit" className="button_text">
                    Login &nbsp;<BsArrowRightCircleFill/>
                  </button>

                </div>
              </center>
            </form>
            <center><hr  className="login-hr-line"/></center>
            <a href="/" className="login-text-buttom">Forgotten your Apple ID or password?</a><br />
            <span className="login-text-buttom">Do not have an Apple ID ? <a href="/register" className="login-text-buttom">Create yours now.</a><FiArrowUpRight/></span>
          </Container>
        </div>
        <br />
      </div>
    </>
  );
}
