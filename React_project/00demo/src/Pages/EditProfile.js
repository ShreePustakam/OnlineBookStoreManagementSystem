import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userService from '../Services/user.service';

function EditProfile() {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneno] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const cId = sessionStorage.getItem("cId");

    useEffect(() => {
        setUsername(sessionStorage.getItem("userName"));
        setEmail(sessionStorage.getItem("email"));
        setPhoneno(sessionStorage.getItem("phoneNo"));
    }, []); // empty dependency array ensures it runs once after the initial render

    const saveUserInfo = (cId) => {
        const user = {
            userName,
            email,
            phoneNo,
        };
     
        if(cId) {
            userService.updateProfile(user, cId)
                .then((response) => {
                    console.log('User edited successfully', response);
                    // history.push("/login");
                })
                .catch((error) => {
                    alert(error);
                    console.log('Error code ' + error);
                    console.log('Something went wrong', error);
                });
        }
    };

    const getUserProfile=()=>{
        userService.getProfile(cId)
        .then((response)=>{
            const result=response;
            console.log(result);
            sessionStorage.setItem("userName", result.userName);
            sessionStorage.setItem("email", result.email);
            sessionStorage.setItem("phoneNo", result.phoneNo);
        })
    }

    return (
        <Container>
            <Row className="user">
                <Col>
                    <img src="ProjectAssets\signup-image.jpg" alt="Signup Image" />
                </Col>

                <Col>
                    <h1 className="logo-font">Pustakam</h1>
                    <div className="form signup-form">
                        <h2 className="form-title">Edit Profile</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={(e) => {
                            e.preventDefault();
                            saveUserInfo(cId);
                            getUserProfile();
                        }}>
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="userName" id="userName" placeholder="Your Name"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneno"><i className="zmdi zmdi-email"></i></label>
                                <input type="tel" name="phoneNo" id="phoneNo" placeholder="Your Phone Number" value={phoneNo}
                                    onChange={(e) => setPhoneno(e.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-success">
                                Save Info
                            </button>
                            <p style={{ margin: 30 }}><a href="/home" style={{ color: "#D14D72" }}>Go to Home</a></p>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default EditProfile;
