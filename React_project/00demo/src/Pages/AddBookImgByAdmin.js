import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import bookImgService from '../Services/bookImg.service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/signupStyle.css';
import '../Styles/navbarStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBookImgByAdmin() {
  const [image, setImage] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isbn = queryParams.get('isbn');
  const history = useHistory();

  const saveBookImgInfo = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    bookImgService.postAddBookInfo(formData, isbn)
      .then((response) => {
        console.log('Book Image added successfully', response);
        toast.success('Book image uploaded successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => history.push("/addbook"), 3000)

        // history.push("/addbook");
      })
      .catch((error) => {
        alert(error);
        console.error('Error uploading image:', error);
      });
  };

  return (
    <Container>
      <Row className="user">
        <Col>
          <img src="ProjectAssets\signup-image.jpg" alt="signup" />
        </Col>

        <Col>
          <h1 className="logo-font">Pustakam</h1>
          <div className="form signup-form">
            <h2 className="form-title">Add Book Image</h2>
            <h4 className="form-title">Upload Image Book Isbn : {isbn}</h4>
            <form method="POST" className="register-form" id="register-form" onSubmit={saveBookImgInfo}>
              <div className="form-group">
                <label htmlFor="image"><i className="zmdi zmdi-image material-icons-name"></i></label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Add Book Image
              </button>
            </form>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default AddBookImgByAdmin;
