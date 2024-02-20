import react from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userService from '../Services/user.service';
import React, { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function EditProfile(){

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneno] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const cid = queryParams.get('cid');

    const saveUserInfo = (cid) => {
        const user = {
            userName,
            email,
            phoneNo,
            password,
        };
     
        if(cid){
            userService.updateProfile(user)
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


    return <Container>
    <Row className="user">
        <Col>
            <img src="ProjectAssets\signup-image.jpg"></img>
        </Col>

        <Col>
            <h1 className="logo-font">Pustakam</h1>
            <div className="form signup-form">
                <h2 className="form-title">Edit Profile</h2>
                <form method="POST" className="register-form" id="register-form" onSubmit={saveUserInfo(cid)}>
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
                        Save Info
                    </button>
                    <p><a href="/home">Home</a></p>
                </form>
            </div>
        </Col>
    </Row>
</Container>
}

export default EditProfile;