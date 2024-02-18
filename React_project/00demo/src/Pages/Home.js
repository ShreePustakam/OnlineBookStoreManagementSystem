import Advertisments from '../Components/Advertisments';
import SelfHelpSeries from '../Components/SelfHelpSeries';
import MangaSeries from '../Components/MangaSeries';
import FantasySeries from '../Components/FantasySeries';
import Navbar1 from "../Components/Navbar1";
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';

function Home() {

   return (
      <>
         <Navbar1/>
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