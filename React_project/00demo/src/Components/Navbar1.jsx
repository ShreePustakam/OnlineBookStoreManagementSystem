import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/navbarStyle.css';
import NewUserLogin from './NewUserLogin';
import UserLogin from './UserLogin';
import { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import { FormControl, InputGroup } from 'react-bootstrap';

function Navbar1() {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    function sendSearch() {
        debugger;
        axios.get(`http://localhost:8080/books/search/` + searchTerm).then((response) => {
            console.log(response);
            history.push("/searchresult", response.data);
        })
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "#FFDFDF" }}>
            <Container fluid>
                <Navbar href='/Home' className='logo-font' >PUSTAKAM</Navbar>
                <div style={{ marginLeft: 50 }}></div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <Button variant="outline-secondary" type="submit" onClick={sendSearch}>
                                Search
                            </Button>
                        </InputGroup>


                        <div style={{ marginLeft: 50 }}></div>
                        {sessionStorage.getItem("isLoggedIn") === "true" ? <UserLogin /> : <NewUserLogin />}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;