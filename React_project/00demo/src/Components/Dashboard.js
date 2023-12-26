import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Navbar from './Navbar';
import Footer from './Footer';
//import Header from  './Header';


function Dashboard() {

   return (
      <>
      <Navbar/>
    <h1>DASHBOARD</h1>
    <Footer/>
      </>
   )
}

export default Dashboard;