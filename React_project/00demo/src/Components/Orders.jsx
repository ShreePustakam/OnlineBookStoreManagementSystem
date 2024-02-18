import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/cartStyle.css';

function Orders() {
    return <Container className='yourCart'>
    <h1>Your Orders</h1>
    <Row className='cart-rows'>
      <Col xs={6} md={4} lg={2}>
      <img src="/ProjectAssets/SelfHelp/AtomicHabits.jpg" alt="" />
      </Col>

      <Col xs={6} md={4} lg={2}>
      <h3>Book Title</h3>
      </Col>

      <Col xs={6} md={4} lg={2}>
      <h5>Order id:</h5>
      </Col>

      <Col xs={6} md={4} lg={2}>
      <h5>Delivery Date</h5>
      </Col>

      <Col xs={6} md={4} lg={2}>
      <h5>Qty: 08</h5>
      </Col>

      <Col xs={6} md={4} lg={2}>
      <h5>rs. 600</h5>
      </Col>

    </Row>
    
  </Container>
}

export default Orders;