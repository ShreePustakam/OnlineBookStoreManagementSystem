import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/aboutUsStyle.css";

function AboutUs() {
  return (
    <Container className='aboutus'>
        <Row>
        <Col>
            <h1 className='logo-font'><a href="/home" className='logo-font'>Pustakam</a></h1>
            <h3>Development Team</h3>
        </Col>
        </Row>
        <Row>
            <Col>
            <img src="ProjectAssets\TeamPhoto.jpg"></img>
            </Col>
        </Row>
        <Row>
            <Col>
            <p>
                {/* <a href='https://github.com/ApoorvaVairagi'>Apoorva Vairagi</a>
                <a href='https://github.com/KunalP1303'>Kunal Patle</a>
                <a href='https://github.com/hrutikpiprade'>Hrutik Piprade</a>
                <a href='https://github.com/aseem-hub'>Aseem Vairagi</a> */}

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

            </p>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutUs;