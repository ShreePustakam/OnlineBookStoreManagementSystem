import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';
import wishlistService from '../Services/wishlist.service';
import cartService from '../Services/book-qty.service';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
  const [books, setBooks] = useState([]);
  const cId = sessionStorage.getItem('cId');

  useEffect(() => {
    // Fetch orders when the component mounts
    fetchBooks();
  }, [cId]);

  const fetchBooks = async () => {
    wishlistService.myWishlist(cId).then((response) => {
      console.log(response.data)
      setBooks(response.data || []); // Ensure that fetchedOrders is not undefined
    });

  };

  const addToCart = (cId, isbn) => {
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
  const removeFromWishlist = (cId, isbn) => {
    wishlistService.removeBook(cId, isbn).then((response) => {
      console.log(response);
      window.location.reload();
    })
  }

  return (
    <Container className='yourCart'>
      <h1>My Wishlist</h1>
      {books.map((book, index) => (
        <div key={index} className="card mb-3"> {/* Add margin-bottom here */}
          <div className="row mb-3">
            <div className="col-3">
              <img
                className="img-fluid"
                src={'data:image/jpg;base64,' + book.image}
                alt={book.title}
                style={{ width: '90px', marginLeft:20, marginTop:20 }} // Set your desired width and height
              />
            </div>

            <div className="col-3">
              <h5>{book.title}</h5>
            </div>
            <div className="col-2" style={{color:"#B9005B"}}>
              <p style={{marginTop:60}}>Price: &#8377; {book.price}</p>
            </div>
            <div className="col-2">
              <Button variant="primary" onClick={() => addToCart(cId, book.isbn)}>Add to Cart</Button>
              <Button variant="btn btn-outline-danger " onClick={() => removeFromWishlist(cId, book.isbn)}>Remove</Button>
            </div>
            <div className="col-2">

            </div>
            {/* Add more details as needed */}
          </div>
        </div>
      ))}
      <ToastContainer />
    </Container>
  );
};

export default Wishlist;

