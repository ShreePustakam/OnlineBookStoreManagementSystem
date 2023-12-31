
import './Styles/wishlist.css'
function BookSet() {
    return ( 
        <>
        <section className="h-100 h-custom">
  <div className="container h-100 py-5">
    <h1>Book Set Name </h1>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col responsive">

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="h5">Books</th>
                <th scope="col">Format</th>
                <th scope="col">Price</th>
                <th scope="col">Add to cart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center   my-auto flex-column flex-md-row ">
                    <img src='http://localhost:3000/book1.jpg' className="img-fluid rounded-3 img"
                       alt="Book"/>
                       
                    <div className="flex-column ms-4 ">
                      <p className="mb-2">Thinking, Fast and Slow</p>
                      
                    </div>
                  </div>
                </th>
                <td className="align-middle">
                  <p className="mb-0 subtotal" >HardBound</p>
                </td>
                <td className="align-middle">
                  <p className="mb-0 subtotal" >₹ 999.00</p>
                </td>
                <td className="align-middle">
                  <div className="d-flex flex-row">
                  <button type="button" class="btn btn-default btn-sm btn-outline-success">
                <span class="glyphicon
                    glyphicon-shopping-cart">
                </span>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <b> Add to Cart </b>
        
            </button>
                  </div>
                </td>
                
              </tr>
              <tr>
                <th scope="row" className="border-bottom-0">
                
                  <div className='responsive '>
                  <div className="d-flex align-items-center my-auto flex-column flex-md-row">
                    <img src="http://localhost:3000/book1.jpg" className="img-fluid rounded-3 img"
                       alt="Book"/>
                    <div className="flex-column ms-4">
                      <p className="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                      
                        </div>
                     </div>
                  </div>
                </th>
                <td className="align-middle border-bottom-0">
                  <p className="mb-0 subtotal" >Paperback</p>
                </td>
                <td className="align-middle border-bottom-0">
                  <p className="mb-0 subtotal" >₹ 1350.00</p>
                </td>
                <td className="align-middle border-bottom-0">
                  <div className="d-flex flex-row">
                  <button type="button" class="btn btn-default btn-sm btn-outline-success">
                <span class="glyphicon
                    glyphicon-shopping-cart">
                </span>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <b> Add to Cart </b>
        
            </button>
                  </div>
                </td>
                
                
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</section>
        </>
        
     );
}

export default BookSet;