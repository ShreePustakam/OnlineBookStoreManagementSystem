import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/navbarStyle.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar1User() {

    const history = useHistory();

    function logout(){
        sessionStorage.clear();
        history.push("/home");
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"#FFDFDF"}}>
            <Container fluid>
                <Navbar href='/Home' className='logo-font' >PUSTAKAM</Navbar>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Nav.Link href="/profile">{sessionStorage.getItem("userName")} s'Profile</Nav.Link>

                        {/* <Nav.Link href="/home">{sessionStorage.clear}Logout</Nav.Link> */}
                        <button onClick={logout}>Logout</button>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1User;