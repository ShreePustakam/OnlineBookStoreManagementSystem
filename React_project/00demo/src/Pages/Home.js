import Advertisments from '../Components/Advertisments';
import SelfHelpSeries from '../Components/SelfHelpSeries';
import MangaSeries from '../Components/MangaSeries';
import FantasySeries from '../Components/FantasySeries';
import Footer from '../Components/Footer';
import Navbar1User from '../Components/Navbar1User';
import Navbar1NewUser from '../Components/Navbar1NewUser';
import Navbar2 from '../Components/Navbar2';

function Home() {

   return (
      <>
         {sessionStorage.getItem("isLoggedIn") === "true" ? <Navbar1User/> : <Navbar1NewUser/>}
         <Navbar2/>
         <Advertisments/>
         <SelfHelpSeries/>
         <MangaSeries/>
         <FantasySeries/> 
         <Footer/>
      </>
   )
}

export default Home;