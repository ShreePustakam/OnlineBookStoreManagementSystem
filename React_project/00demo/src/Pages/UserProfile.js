import { Link } from "react-router-dom/cjs/react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/userProfileStyle.css";
import { useEffect, useState } from "react";

function UserProfile() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneno] = useState("");

    useEffect(() => {
        setUsername(sessionStorage.getItem("userName"));
        setEmail(sessionStorage.getItem("email"));
        setPhoneno(sessionStorage.getItem("phoneNo"));
    }, []);

    return <Container className="user-container">
        <Row className="user-profile">

            <Col>
                <img src="ProjectAssets\signin-image.jpg"></img>
            </Col>

            <Col>
                <h1 className='logo-font'><a href="/home" className='logo-font'>Pustakam</a></h1>

                <div className='user-info'>
                    <h3>{userName}</h3>
                    <h5>{email}</h5>
                    <h5>{phoneNo}</h5>

                    <div className='your-options'>
                        <div>
                            <a href="#" class="user-link">
                                <Link to="/cart">Your cart </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                                </svg>
                            </a>
                        </div>

                        <div>
                            <a href="#" class="user-link">
                                <Link to="/wishlist">Your Wishlist </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                                </svg>
                            </a>
                        </div>

                        <div>
                            <a href="#" class="user-link">
                                <Link to="/orders">Your Orders </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"></path>
                                </svg>
                            </a>
                        </div>

                        <div>
                            <a href="#" class="user-link">
                                <Link to="/editprofile">Edit Profile </Link>
                            </a>
                        </div>

                        <p style={{ margin: 30 }}><a href="/home" style={{ color: "#D14D72" }}>Home</a></p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
}

export default UserProfile;