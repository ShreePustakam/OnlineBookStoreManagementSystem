import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/allSeriesStyle.css';

import axios from 'axios';
import {useState, useEffect} from "react";

function MangaSeries(props) {

    var [books, fantasyBooks] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])

    var fetchData = () =>{
        axios.get(`http://localhost:8080/books/category/MANGA`,{}).then((response)=>{
            fantasyBooks(response.data);
        })
    }

    return <div className="series" style={{marginBottom:90}}>
        <h1>Manga</h1>
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
                    <button type="button" className="btn btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                        </svg>
                    </button>
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