import Advertisments from '../Advertisments';
import BottomAds from '../BottomAds';
import SelfHelpSeries from '../SelfHelpSeries';
import MangaSeries from '../MangaSeries';
import FantasySeries from '../FantasySeries';
import Navbar1 from "../Navbar1";
import Navbar2 from '../Navbar2';
import Footer from '../Footer';

function Home() {

   return (
      <>
         <Navbar1/>
         <Navbar2/>
         <Advertisments/>
         <SelfHelpSeries/>
         <MangaSeries/>
         <FantasySeries/>
         <BottomAds/>   
         <Footer/>
      </>
   )
}

export default Home;