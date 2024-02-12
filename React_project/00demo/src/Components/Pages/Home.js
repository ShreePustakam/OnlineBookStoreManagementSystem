import Advertisments from '../Advertisments';
import BottomAds from '../BottomAds';
import SelfHelpSeries from '../SelfHelpSeries';
import MangaSeries from '../MangaSeries';
import FantasySeries from "./FantasySeries";
function Home() {

   return (
      <>
         <Advertisments/>
         <SelfHelpSeries/>
         <MangaSeries/>
         <FantasySeries/>
         <BottomAds/>   
      </>
   )
}

export default Home;