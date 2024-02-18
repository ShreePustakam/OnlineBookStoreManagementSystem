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


// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { toast } from 'react-toastify'
// // import config from '../config'
// // import { clear, updateQuantity } from '../features/cartSlice'
// // import { placeOrder } from '../services/order'

// export function Cart() {
//   const [total, setTotal] = useState(0)

//   // use it for updating the cart slice
//   const dispatch = useDispatch()

//   // reading the current state
//   const cart = useSelector((state) => state.cart)
//   useEffect(() => {
//     let totalAmount = 0
//     for (const item of cart.items) {
//       totalAmount += item['price'] * item['quantity']
//     }
//     setTotal(totalAmount)
//   }, [cart.items])

//   const onQuantityUpdate = (itemId, quantity) => {
//     dispatch(updateQuantity({ itemId, quantity }))
//   }

//   const onPlaceOrder = async () => {
//     const result = await placeOrder(cart.items, total)
//     if (result['status'] == 'success') {
//       dispatch(clear())
//       toast.success('successfully placed an order')
//     } else {
//       toast.error(result['error'])
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className='container'>
//         <h1 className='title'>Cart</h1>

//         {/* conditional rendering */}
//         {cart.items.length == 0 && (
//           <h3 style={{ textAlign: 'center' }}>
//             There are no pizzas in your cart. It seems like you are now
//             following the healthy habits.
//           </h3>
//         )}
//         {cart.items.length > 0 && (
//           <div>
//             <table className='table table-striped'>
//               <thead>
//                 <tr>
//                   <th>No</th>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Total</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.items.map((item, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <img
//                           style={{ width: 50 }}
//                           src={config.server + '/' + item['image']}
//                           alt=''
//                         />
//                       </td>
//                       <td>{item['name']}</td>
//                       <td>{item['price']}</td>
//                       <td>{item['quantity']}</td>
//                       <td>{item['price'] * item['quantity']}</td>
//                       <td>
//                         <button
//                           onClick={() => {
//                             onQuantityUpdate(item['id'], item['quantity'] + 1)
//                           }}
//                           className='btn btn-success btn-sm'
//                         >
//                           +
//                         </button>
//                         <button
//                           onClick={() => {
//                             onQuantityUpdate(item['id'], item['quantity'] - 1)
//                           }}
//                           className='btn btn-success btn-sm ms-1'
//                         >
//                           -
//                         </button>
//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan='5' style={{ textAlign: 'right' }}>
//                     Total Amount
//                   </td>
//                   <td>{total}</td>
//                 </tr>
//               </tfoot>
//             </table>

//             <button onClick={onPlaceOrder} className='btn btn-primary'>
//               Place Order
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   )
// }

// export default Cart