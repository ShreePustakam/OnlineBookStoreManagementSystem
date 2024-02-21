import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { loginUser } from "../Services/user.service";
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Login() {

  var [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(loginDetails).then(response => {
      const result = response;
      console.log(response);
      if (result.message == "Invalid Username or Password") {
        setLoginDetails({ email: "", password: "" });
        toast.error(result.message);
        history.push("/Login")
      }
      else {
        if (result.role == "CUSTOMER") {
          sessionStorage.setItem("cId", result.userId);
          sessionStorage.setItem("userName", result.userName);
          sessionStorage.setItem("email", result.email);
          sessionStorage.setItem("phoneNo", result.phoneNo);
          sessionStorage.setItem("role", result.role);
          sessionStorage.setItem("isLoggedIn", "true");
          toast.success("Welcome " + result.userName)
          history.push("/home");
        }
        else if (result.role == "ADMIN") {
          sessionStorage.setItem("userId", result.userId);
          sessionStorage.setItem("userName", result.userName);
          sessionStorage.setItem("email", result.email);
          sessionStorage.setItem("phoneNo", result.phoneNo);
          sessionStorage.setItem("role", result.role);
          sessionStorage.setItem("isLoggedIn", "true");
          toast.success("Welcome " + result.userName)
          history.push("/adminProfile");
        }
        else {
          setLoginDetails({ email: "", password: "" });
          toast.error('Please Enter all credentials');
        }
      }
    })
  }

  const handleChange = (args) => {
    var updatedUser = { ...loginDetails };
    console.log(args.target.value);
    updatedUser[args.target.name] = args.target.value;
    setLoginDetails({ ...updatedUser });
  }

  return <Container>
    <Row className="user">
      <Col>
        <img src="ProjectAssets\signup-image.jpg"></img>
      </Col>

      <Col>
        <h1 className="logo-font">Pustakam</h1>
        <div className="form signin-form">
          <h2 className="form-title">Signin</h2>
          <form method="POST" className="register-form" id="login-form">
            <div className="form-group">
              <label for="email"><i className="zmdi zmdi-email"></i></label>
              <input type="email" name="email" id="email" placeholder="Your Email" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
              <input type="password" name="password" id="your_pass" placeholder="Password" onChange={handleChange} required />
            </div>
            <button type="button" className="btn btn-success" onClick={onSubmit}>
              Login
            </button>
            <p>Don't have an Account? <a href="/signup">Sign Up</a></p>
          </form>
        </div>
      </Col>
    </Row>
  </Container>
}

export default Login;
