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
                        <a href='https://github.com/ApoorvaVairagi' style={{marginLeft:50}}>Apoorva Vairagi</a>
                        <a href='https://github.com/KunalP1303' style={{marginLeft:50}}>Kunal Patle</a>
                        <a href='https://github.com/hrutikpiprade' style={{marginLeft:50}}>Hrutik Piprade</a>
                        <a href='https://github.com/aseem-hub' style={{marginLeft:50}}>Aseem Vairagi</a>
                    <p style={{marginLeft:70, marginRight:70}}>
                        Welcome! We are glad to see you here. 
                        Our development team isn't just a collection of professionals; they are a force of creativity, problem-solving, and relentless pursuit of excellence. As we delve into the world of coding, problem-solving, and cutting-edge technology, let us take a moment to paint a picture of the remarkable individuals who make up this extraordinary team. For Front-end development we had Apoorva Vairagi and Aseem Vairagi. For the back-end we had Kunal Patle and Hrutik Piprade. And to integrate everything we all were involved. We invite you to join me in acknowledging the hard work, passion, and ingenuity that our development team brings to the table. Together, we are not just witnessing technological advancements; we are actively shaping the future.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;