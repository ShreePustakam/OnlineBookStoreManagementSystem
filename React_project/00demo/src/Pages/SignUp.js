import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';

function SignUp()
{
    return <>
    <Container>
        <Row className="user">
            <Col>
            <img src="ProjectAssets\signup-image.jpg"></img>
            </Col>

            <Col>
            <h1 className="logo-font">Pustakam</h1>
            <div className="form signup-form">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="name" id="name" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                <label for="email"><i className="zmdi zmdi-email"></i></label>
                <input type="email" name="email" id="email" placeholder="Your Email"/>
                </div>
                <div className="form-group">
                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                <input type="password" name="pass" id="pass" placeholder="Password"/>
                </div>
                <div className="form-group">
                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                </div>
                <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                </div>
                </form>
                </div>
            </Col>
        </Row>
    </Container>
    </>
}



export default SignUp;





