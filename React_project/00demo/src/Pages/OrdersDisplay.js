import Footer from '../Components/Footer';
import Orders from "../Components/Orders";
import Navbar1User from "../Components/Navbar1User";
import Navbar2 from '../Components/Navbar2';

function OrdersDisplay() {

   return (
      <>
         <Navbar1User/>
         <Navbar2/>
         <Orders/>  
         <Footer/>
      </>
   )
}

export default OrdersDisplay;