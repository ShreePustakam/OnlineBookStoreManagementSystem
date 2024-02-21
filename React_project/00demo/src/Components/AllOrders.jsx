import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { allOrders, ChangeOrderStatus } from '../Services/order.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const AdminOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const fetchedOrders = await allOrders();
      setOrders(fetchedOrders || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (orderId) => {
    if (!selectedStatus) {
      toast.warning('Please select a status!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    ChangeOrderStatus(selectedStatus, orderId)
      .then((response) => {
        console.log(`Changing status of order ${orderId} to ${selectedStatus}`);
        
        toast.success(response.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // You might want to update the local state with the new status here if needed
        // For example, call fetchOrders() to refresh the order list
        fetchOrders();
        // Clear the selectedStatus after successful status change
        setSelectedStatus('');
      })
      .catch((error) => {
        console.error('Error changing status:', error);
        toast.error('Status not changed!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Container className="my-5" style={{ background: 'white' }}>
      <h1>Manage Orders</h1>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total Amount (₹)</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Current Status</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.totalAmount}</td>
              <td>{order.odate}</td>
              <td>{order.ddate}</td>
              <td>{order.ostatus}</td>
              <td>
                <select
                  id='sts'
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                   <option value="" disabled selected>Select Status</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="INTRANSIT">INTRANSIT</option>
                  <option value="OUTFORDELIVERY">OUTFORDELIVERY</option>
                  <option value="ORDERED">ORDERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleStatusChange(order.orderId)}
                >
                  Change Status
                </button>
                <Link to={`/bill?oId=${order.orderId}`}>
                  <button className="btn btn-primary">View Bill</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
};

export default AdminOrderPage;
