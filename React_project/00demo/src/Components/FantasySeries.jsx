import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import fantasyBooks from "../fanatasyBooksArr";
import '../Components/Styles/allSeriesStyle.css';

import axios from 'axios';
import {useState, useEffect} from "react";

function FantasySeries(props) {

    var [books, fantasyBooks] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])

    var fetchData = () =>{
        axios.get(`http://localhost:8080/books/category/FANTASY`,{}).then((response)=>{
            fantasyBooks(response.data);
        })
    }

    return <div className="series" style={{marginBottom:90}}>
        <h1>Fantasy</h1>
        <Container>
        <Row>
        {
        books.map((e) => {
            return(
            <Col xs={6} md={4} lg={2}>
                <Card style={{ width: '10rem'}}>
                <Card.Img src={e.image} style={{width:100, alignContent:"center" }}/>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
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