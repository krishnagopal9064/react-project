import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import './register.css'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {FiArrowUpRight} from 'react-icons/fi'

export default function Register() {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      contact:"",
      password: "",
    },
    onSubmit: (value) => {
      console.log("Submitted Value : ", value);
    
  const user={
    name : value.name,
    email : value.email,
    contact : value.contact,
    password : value.password
  }
  Axios.post('https://node-api-by-krishna.herokuapp.com/register',user)
  .then((res)=>{
    console.log("Axios res: ",res.data);
    alert("Account Created Successfully")
    navigate('/login')
  })
  .catch((err)=>{
    console.log('Axios err',err);
  })
},
});

  return (
    <>
      <div className="login_background">
        <div className="login_outer">
          <Container className="login_inner">
            <h3 className="login-heading">Create Your Apple Account</h3>
            <br />
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
                <br />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
                <br />
              </div>
              <div>
                <input
                  type="nomber"
                  placeholder="Contact No."
                  name="contact"
                  className="input"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
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
                <br />
              </div>
              <center>
                <div className="button_submit">
                  <button type="submit" className="button_text">
                    Create Account &nbsp;<BsArrowRightCircleFill/>
                  </button>
                </div>
              </center>
            </form>
            <center><hr  className="login-hr-line"/></center>
            <span className="login-text-buttom">Already have an Apple ID ? <a href="/login" className="login-text-buttom">Login now.</a><FiArrowUpRight/></span>
          </Container>
        </div>
        <br />
      </div>
    </>
  );
}
