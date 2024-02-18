import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import mangaBooks from "../mangaBooksArr";
import '../Styles/allSeriesStyle.css';
import { Link } from "react-router-dom";
import '../Pages/BookDisplay';

function MangaSeries(props) {
    return <div className="series">
        <h1>Manga</h1>
        <Container>
        <Row>
        {
        mangaBooks.map((e) => {
            return(
            <Col xs={6} md={4} lg={2}>
                <Card style={{ width: '10rem'}}>
                <Card.Img src={e.src} style={{width:100, alignContent:"center" }}/>
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                    {e.price}
                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
                </Card>
            </Col>
            )
        })
        }
      </Row>
    </Container>
    </div>
}

export default MangaSeries;