import Navbar2 from '../Components/Navbar2';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import AllBooks from '../Components/AllBooks';

function AllBookDisplay() {

   return (
      <>
         <AllBooks/> 
         <p style={{ marginLeft: 300 }}><a href="/adminprofile" style={{ color: "#D14D72" }}>&lt; Back</a></p>
      </>
   )
}

export default AllBookDisplay;