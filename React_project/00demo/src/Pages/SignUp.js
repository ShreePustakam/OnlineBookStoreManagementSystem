import React, { useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import userService from '../Services/user.service';

function SignUp() {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneno] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    // const navigate = useNavigate();

    const saveUserInfo = (e) => {
        e.preventDefault();

        const user = {
            userName,
            email,
            phoneNo,
            password,
        };
     
        userService.postSignupInfo(user)
            .then((response) => {
                console.log('User added successfully', response);
                history.push("/login");
            })
            .catch((error) => {
                alert(error);
                console.log('Error code ' + error);
                console.log('Something went wrong', error);
            });
    };

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
                        <form method="POST" className="register-form" id="register-form" onSubmit={saveUserInfo}>
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="userName" id="userName" placeholder="Your Name"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label for="phoneno"><i className="zmdi zmdi-email"></i></label>
                                <input type="tel" name="phoneNo" id="phoneNo" placeholder="Your Phone Number" value={phoneNo}
                                    onChange={(e) => setPhoneno(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-success">
                                Sign Up
                            </button>
                            <p>Already have an Account? <a href="/login">Log in</a></p>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}



export default SignUp;





