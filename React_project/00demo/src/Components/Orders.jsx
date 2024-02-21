import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';
import { myOrders } from '../Services/order.service';
import "../Styles/ordersStyle.css";
import '../Styles/cartStyle.css';

// ... (import statements)

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const cId = sessionStorage.getItem('cId');

  useEffect(() => {
    // Fetch orders when the component mounts
    fetchOrders();
  }, [cId]);

  const fetchOrders = async () => {
    const fetchedOrders = await myOrders(cId);
    setOrders(fetchedOrders || []); // Ensure that fetchedOrders is not undefined
  };

  return (
    <Container className='yourCart'>
    <h1>My Orders</h1>
    <Container className="my-5" style={{ background: 'white' }}>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total Amount (₹)</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Action</th> {/* Add a new column for the "View Bill" button */}
          </tr>
        </thead>
        <tbody>
          {orders && orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.totalAmount}</td>
              <td>{order.ostatus}</td>
              <td>{order.odate}</td>
              <td>{order.ddate}</td>
              <td>
                <Link to={`/bill?oId=${order.orderId}`}>
                  <button className="btn btn-primary">View Bill</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </Container>
  );
};

export default OrderPage;

