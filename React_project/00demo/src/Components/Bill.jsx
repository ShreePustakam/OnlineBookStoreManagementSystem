import React, { useState, useEffect } from 'react';
import { orderBooks } from '../Services/order.service';
import { useHistory, useLocation } from 'react-router-dom';

function Bill() {
    const [books, setBooks] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const oId = queryParams.get('oId');
    const history = useHistory();

    useEffect(() => {
        // Fetch books when the component mounts
        fetchBooks();
    }, [oId]);

    const fetchBooks = async () => {
        const fetchedBooks = await orderBooks(oId);
        setBooks(fetchedBooks || []); // Ensure that fetchedBooks is not undefined
    };
    return (
        <>
            <div className="container my-5">
                <div className="card card-1" style={{ maxWidth: "600px", margin: "auto" }}>
                    <div className="card-header bg-white">
                        <div className="row justify-content-between">
                            <div className="col-8">
                                <h4 className="mb-0">Thanks for your Order, <span className="change-color">{sessionStorage.getItem('userName')}</span>!</h4>
                            </div>
                            <div className="col-4 text-right">
                                <img className="img-fluid" src="http://localhost:3000/logobg.png" alt="Books For Everyone" width="60" height="60" />
                                <p className="mb-0 Glasses">Books For Everyone</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto"> <h6 className="color-1 mb-0 change-color">Receipt</h6> </div>
                    <div className="card-body">

                        {books.map((orderItem, index) => (
                            <div key={index} className="card mb-3"> {/* Add margin-bottom here */}
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img
                                            className="img-fluid"
                                            src={'data:image/jpg;base64,' + orderItem.book.image}
                                            alt={orderItem.book.title}
                                            style={{ width: '80px', height: '90px' }} // Set your desired width and height
                                        />
                                    </div>

                                    <div className="col-3">
                                        <h5>{orderItem.book.title}</h5>
                                    </div>
                                    <div className="col-2">
                                        <p>Price: &#8377; {orderItem.book.price}</p>
                                    </div>
                                    <div className="col-2">
                                        <p>Quantity: {orderItem.quantity}</p>
                                    </div>
                                    <div className="col-2">
                                        <p>Subtotal: {orderItem.quantity * orderItem.book.price}</p>
                                    </div>
                                    {/* Add more details as needed */}
                                </div>
                            </div>
                        ))}


                        <div className="col">
                            <div className="row justify-content-between">
                                <div className="col-auto"><p className="mb-1 text-dark"><b>Order Details</b></p></div>
                                <div className="flex-sm-col text-right col"> <p className="mb-1"><b>Total</b></p> </div>
                                <div className="flex-sm-col col-auto"> <p className="mb-1">&#8377;{books.reduce((total, orderItem) => total + orderItem.book.price * orderItem.quantity, 0)}</p> </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="flex-sm-col text-right col"><p className="mb-1"><b>Delivery Charges</b></p></div>
                                <div className="flex-sm-col col-auto"><p className="mb-1">Free</p></div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <div className="jumbotron-fluid">
                            <div className="row justify-content-between">
                                <div className="col-sm-auto col-auto my-auto">
                                    <img className="img-fluid my-auto align-self-center" src="http://localhost:3000/logobg.png" alt="Logo" width="60" height="60" />
                                </div>
                                <div className="col-auto my-auto">
                                    <h2 className="mb-0 font-weight-bold">TOTAL PAID</h2>
                                </div>
                                <div className="col-auto my-auto ml-auto">
                                    <h1 className="display-3">&#8377; {books.reduce((total, orderItem) => total + orderItem.book.price * orderItem.quantity, 0)}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bill;
