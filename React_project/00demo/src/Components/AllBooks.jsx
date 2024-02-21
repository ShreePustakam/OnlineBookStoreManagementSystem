import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/allSeriesStyle.css';
import {useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import bookService from "../Services/book.service";
import { Link } from 'react-router-dom';

function AllBooks() {
    const [books,setBooks] = useState([]);

    useEffect(() => {
      // Fetch orders when the component mounts
      fetchBooks();
    }, []);
  
    const fetchBooks = async () => {
        try {
          const fetchedBooks = (await bookService.allBookInfo()).data;
          setBooks(fetchedBooks || []);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
    };
      
   


    return <div className="series" style={{ marginBottom: 90 }}>
        <h1>Manage Inventory and Update Book Details</h1>
        <Container>
            <Row>
                {
                    books.map((e) => {
                        return (
                            <Col xs={12} md={6} lg={4}>
                                <Card className="card-container">
                                    <Card.Img className="card-img" src={"data:image/jpg;base64," + e.image} style={{ width: 100, alignContent: "center" }} />
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>{e.author}</Card.Text>
                                        <Card.Text>Stock : {e.stock}</Card.Text>
                                        <Card.Text>
                                            ₹{e.price}
                                        </Card.Text>
                                        
                                        <Link to={`/update?isbn=${e.isbn}`}>
                                          <button className="btn btn-primary">Edit Book & Inventory</button>
                                        </Link>
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

export default AllBooks;