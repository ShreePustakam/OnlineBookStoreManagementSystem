import Advertisments from '../Components/Advertisments';
import SelfHelpSeries from '../Components/SelfHelpSeries';
import MangaSeries from '../Components/MangaSeries';
import FantasySeries from '../Components/FantasySeries';
import Footer from '../Components/Footer';
import Navbar2 from '../Components/Navbar2';
import Navbar1 from '../Components/Navbar1';

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