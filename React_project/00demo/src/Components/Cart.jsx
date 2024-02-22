import Container from 'react-bootstrap/Container';
import cartService from '../Services/book-qty.service'
import { placeOrder } from '../Services/order.service';
import '../Styles/cartStyle.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';

function Cart() {

  const history = useHistory();
  const cId = sessionStorage.getItem("cId");
  var [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({}); // Object to store quantities for each item

  useEffect(() => {
    fetchCart();
  }, [cId]);

  const fetchCart = async () => {
    const cartItems = await cartService.displayCart(cId);
    setCart(cartItems.data || []);
    // Initialize quantities object with default quantity for each item
    console.log(cartItems);
    const initialQuantities = {};
    cartItems.data.forEach(item => {
      initialQuantities[item.id] = item.quantity; // Default quantity is 1
    });
    setQuantities(initialQuantities);
  }

  const setBookQuantity = (cartItem, newValue) => {
    // Get the updated quantity directly from state
    const qty = {
      isbn: cartItem.book.isbn,
      userId: cId,
      quantity: newValue,
    };

    cartService.setBookQuantity(qty)
      .then((response) => {
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

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  }

  const removeBook = (cId, isbn) => {
    cartService.removeBook(cId, isbn).then((response) => {
      console.log(response.data.message);
      window.location.reload();
    })
  }

  const bookOrder = (cId) => {
    placeOrder(cId).then((response) => {
      console.log(response);
      console.log(response.orderId)

      toast.success("Order Placed Successfully", {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => history.push(`/bill?oId=${response.orderId}`), 2000);
    })
  }

  return (
    <div>
      <Container className='yourCart'>
        <h1>Your Cart</h1>
        {cart.map((orderItem, index) => (
          <div key={index} className="card mb-3" style={{backgroundColor:"white"}}>
            <Row>
              <Col>
                <img
                  className="img-fluid"
                  src={'data:image/jpg;base64,' + orderItem.book.image}
                  alt={orderItem.book.title}
                  style={{ width: '90px', marginLeft:20 }}
                />
              </Col>

              <Col>
                <h5 style={{marginBottom:'35px'}}>{orderItem.book.title}</h5>
              </Col>

              <Col>
                <p style={{color:"#B9005B", marginTop:'45px'}}>Price: &#8377; {orderItem.book.price}</p>
                </Col>

              <Col>
                <p style={{color:"#B9005B", marginTop:'25px'}}>Quantity</p>
                <select
                  id={`quantity-${orderItem.id}`} // Unique id for each select element
                  value={quantities[orderItem.id]} // Set value from state
                  onChange={(e) => {
                    handleQuantityChange(orderItem.id, parseInt(e.target.value));
                    setBookQuantity(orderItem, parseInt(e.target.value));
                  }}
                >
                  {[1, 2, 3].map((value) => (
                    <option key={value} value={value} selected={quantities[orderItem.id] === value}>
                      {value}
                    </option>
                  ))}
                </select>
              </Col>

              <Col>
                <button type="button" className="btn btn-outline-danger" onClick={() => removeBook(cId, orderItem.book.isbn)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                  </svg>
                  Remove
                </button>
              </Col>

              </Row>
          </div>
        ))}
      </Container>
      <div className='buy-btn'>
        <button type="button" class="btn btn-success" onClick={() => bookOrder(cId)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"></path>
          </svg>
          Buy Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
