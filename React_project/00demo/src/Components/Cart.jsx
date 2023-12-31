import './Styles/cart.css'
function Cart() {

//https://mdbootstrap.com/docs/standard/extended/shopping-carts/
    return ( 
        <>
            <section className="h-100 h-custom">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="h5">Shopping Bag</th>
                <th scope="col">Format</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img src='http://localhost:3000/book1.jpg' className="img-fluid rounded-3 img"
                       alt="Book"/>
                    <div className="flex-column ms-4">
                      <p className="mb-2">Thinking, Fast and Slow</p>
                      <p className="mb-0">Daniel Kahneman</p>
                    </div>
                  </div>
                </th>
                <td className="align-middle">
                  <p className="mb-0 subtotal" >HardBound</p>
                </td>
                <td className="align-middle">
                  <div className="d-flex flex-row">
                    <button className="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i className="fas fa-minus"></i>
                    </button>

                    <input id="form1" min="0" name="quantity" value="2" type="number"
                      className="form-control form-control-sm forminput"  />

                    <button className="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td className="align-middle">
                  <p className="mb-0 subtotal" >₹ 999.00</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border-bottom-0">
                  <div className="d-flex align-items-center">
                    <img src="http://localhost:3000/book1.jpg" className="img-fluid rounded-3 img"
                       alt="Book"/>
                    <div className="flex-column ms-4">
                      <p className="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                      <p className="mb-0">Yuval Noah Harari</p>
                    </div>
                  </div>
                </th>
                <td className="align-middle border-bottom-0">
                  <p className="mb-0 subtotal" >Paperback</p>
                </td>
                <td className="align-middle border-bottom-0">
                  <div className="d-flex flex-row">
                    <button className="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i className="fas fa-minus"></i>
                    </button>

                    <input id="form1" min="0" name="quantity" value="1" type="number"
                      className="form-control form-control-sm forminput"  />

                    <button className="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td className="align-middle border-bottom-0">
                  <p className="mb-0 subtotal" >₹ 1350.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card shadow-2-strong mb-5 mb-lg-0  divborder">
          <div className="card-body p-3 ">

            <div className="row justify-content-center">
              
              
              <div className="col-lg-3 col-xl-5  ">
                <div className="d-flex justify-content-between subtotal" >
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">₹ 2349.00</p>
                </div>

                <div className="d-flex justify-content-between  subtotal" >
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">₹ 299.00</p>
                </div>

                <hr className="my-4"/>

                <div className="d-flex justify-content-between mb-4 subtotal">
                  <p className="mb-2">Total (tax included)</p>
                  <p className="mb-2">₹ 2648.00</p>
                </div>

                <button type="button" className="btn btn-primary btn-block btn-lg">
                  <div className="d-flex justify-content-between">
                    <span>Order Now</span>
                    <span>₹ 2648.00</span>
                  </div>
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
        </>
     );
}

export default Cart;