import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import fantasyBooks from "../fanatasyBooksArr";
import '../Components/Styles/allSeriesStyle.css';

function FantasySeries(props) {
    return <div className="series">
        <h1>Fantasy</h1>
        <Container>
        <Row>
        {
        fantasyBooks.map((e) => {
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

export default FantasySeries;