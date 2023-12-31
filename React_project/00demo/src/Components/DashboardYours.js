//import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Navbar from './Navbar';
import Footer from './Footer';
//import Header from  './Header';
//import Book from './Book';
//import Cart from './Cart';
//import Wishlist from './Wishlist';
import Bill from './Bill';
//import Orders from './Orders';
//import Rating from './Rating';
import BookSet from './BookSet.jsx';
function Dashboard() {

   return (
      <>
      <Navbar/>
    <h1>DASHBOARD</h1>
      <BookSet/>
      <Bill/>
    <Footer/>
      </>
   )
}

export default Dashboard;