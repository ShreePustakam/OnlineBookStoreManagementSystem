import './Styles/orders.css';
// import Rating from './Rating';
function Orders() {
    return ( 
        <>
            <div > 
            <div className="card shadow-0 border mb-4 outerdivwidth ">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-2  d-flex justify-content-center align-items-center ">
                    <img src="http://localhost:3000/book1.jpg"
                      className="img-fluid img align-items-center" alt="Book"/>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0"><strong>Book Title Book Title Book Title</strong></p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Paperback</p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Order Status: Delivered</p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Qty: 1</p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">₹ 499</p>
                  </div>
                </div>
                <hr className="mb-4 divstyle1" />
                <div className="row d-flex align-items-center">
                  <div className="col-md-2">
                    <p className="text-muted mb-0 small">Track Order</p>
                  </div>
                  <div className="col-md-10">
                    <div className="progress divstyle2" >
                      <div className="progress-bar divstyle3" style={{width: '65%'}} role="progressbar"
                         aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="d-flex justify-content-around mb-1">
                      <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                      <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="card shadow-0 border mb-4 outerdivwidth ">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-2  d-flex justify-content-center align-items-center ">
                    <img src="http://localhost:3000/book1.jpg"
                      className="img-fluid img align-items-center" alt="Book"/>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0"><strong>Book Title Book Title Book Title</strong></p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Paperback</p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Order Status: Delivered</p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">Qty: 1</p>
                  </div>
                  <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">₹ 499</p>
                  </div>
                </div>
                <hr className="mb-4 divstyle1" />
                <div className="row d-flex align-items-center">
                  <div className="col-md-2">
                    <p className="text-muted mb-0 small">Track Order</p>
                  </div>
                  <div className="col-md-10" style={{width: '30%'}}>
                    <div className="progress divstyle2" >
                      <div className="progress-bar divstyle3" style={{width: '100%'}} role="progressbar"
                         aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                    <div className="d-flex justify-content-around mb-1">
                      <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                      <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                    </div>
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
        </>
     );
}

export default Orders;