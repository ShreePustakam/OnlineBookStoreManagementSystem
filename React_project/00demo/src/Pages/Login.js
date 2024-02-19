import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';

function Login() {
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
              <input type="email" name="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
              <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
            </div>
            <button type="button" className="btn btn-success">
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
