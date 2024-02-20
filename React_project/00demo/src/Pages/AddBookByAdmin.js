import React, { useState, useNavigate } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import bookService from '../Services/book.service';

function AddBookByAdmin() {

    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [binding, setBinding] = useState('');
    const [genre, setGenre] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [stock, setStock] = useState('');
    const [author, setAuthor] = useState('');

    const history = useHistory();

    // const navigate = useNavigate();

    const saveBookInfo = (e) => {
        e.preventDefault();

        const book = {
            isbn,
            title,
            description,
            price,
            binding,
            genre,
            publishedDate,
            stock,
            author
        };
        debugger;
        bookService.postAddBookInfo(book)
            .then((response) => {
                console.log('Book added successfully', response);
                history.push("/addbookimg/:"+isbn);
            })
            .catch((error) => {
                alert(error);
                console.log('Error code ' + error);
                console.log('Something went wrong', error);
            });
    };

    return <>
        <Container>
            <Row className="user">
                <Col>
                    <img src="ProjectAssets\signup-image.jpg"></img>
                </Col>

                <Col>
                    <h1 className="logo-font">Pustakam</h1>
                    <div className="form signup-form">
                        <h2 className="form-title">Add New Book</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={saveBookInfo}>
                            <div className="form-group">
                                <label for="isbn"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="isbn" id="isbn" placeholder="Book ISBN"
                                    value={isbn}
                                    onChange={(e) => setIsbn(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label for="title"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="title" id="title" placeholder="Book Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label for="description"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="description" id="description" placeholder="Book Description" value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label for="price"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="number" name="price" id="price" placeholder="Book Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                            </div>

                            <div className="form-group">
                <label for="stock"><i className="zmdi zmdi-lock-outline"></i></label>
                <input type="number" name="stock" id="stock" placeholder="Book Stocks"
                 value={stock}
                 onChange={(e) => setStock(e.target.value)}/>
                </div>
                
                <div className="form-group">
                <label for="author"><i className="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="author" id="author" placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="publishedDate"><i className="zmdi zmdi-date-range material-icons-name"></i></label>
                    <input type="date" name="publishedDate" id="publishedDate" placeholder="Select Published date"
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="binding"><i className="zmdi zmdi-keyboard-arrow-down material-icons-name"></i></label>
                    <select name="binding" id="binding"  placeholder="Book Binding"
                     value={binding}
                     onChange={(e) => setBinding(e.target.value)} >
                        <option value="" disabled selected>Select the book binding</option>
                        <option value="PAPERBACK">PAPERBACK</option>
                        <option value="HARDCOVER">HARDCOVER</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="genre"><i className="zmdi zmdi-keyboard-arrow-down material-icons-name"></i></label>
                    <select name="genre" id="genre"  placeholder="Book Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}>
                        <option value="" disabled selected>Select  the  book  genre</option>
                        <option value="FICTION">FICTION</option>
                        <option value="HORROR">HORROR</option>
                        <option value="FANTASY">FANTASY</option>
                        <option value="MANGA">MANGA</option>
                        <option value="SELFHELP">SELFHELP</option>
                    </select>
                </div>

                            <button type="submit" className="btn btn-success">
                                Add Book
                            </button>
                           
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}



export default AddBookByAdmin;





