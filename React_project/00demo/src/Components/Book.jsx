import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/bookDisplayStyle.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import cartService from '../Services/book-qty.service';
import wishlistService from '../Services/wishlist.service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Book() {

  const location = useLocation();
  const isbn = location.state.isbn;
  const cId = sessionStorage.getItem("cId");

  var [book, bookDetail] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  var fetchData = () => {
    axios.get(`http://localhost:8080/books/` + isbn).then((response) => {
      bookDetail(response.data);
      console.log(response.data);
    })
  }

  const addToCart = (cId, isbn) => {
    if (cId === null) {
      toast.warning("Please Login First", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else {
      cartService.addToCart(cId, isbn).then((response) => {
        //console.log(response.data.message);
        toast.info(response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    }
  }

  const addToWishlist = (cId, isbn) => {
    if (cId === null) {
      toast.warning("Please Login First", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else {
      wishlistService.addToWishlist(cId, isbn).then((response) => {
        //console.log(response.data.message);
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    }
  }

  return (
    <Container className='bookDisplay' >
      <Card className='bookCard' >
        {
          <Row>
            <Col>
              <img src={"data:image/jpg;base64," + book.image} alt="" className='bookImg' />
            </Col>
            <Col>
              <div>
                <h1>{book.title}</h1>
                <h5>{book.author}</h5>
                <p>{book.description}</p>

                <h4>Price: ₹{book.price}</h4>
                <Button variant="primary" onClick={() => addToCart(cId, isbn)}>Add to Cart</Button>
                <button type="button" className="btn btn-outline-danger" onClick={() => addToWishlist(cId, isbn)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                  </svg>
                </button>
              </div>
            </Col>
          </Row>
        }
      </Card>
      <ToastContainer />
    </Container>
  );
}

export default Book;
