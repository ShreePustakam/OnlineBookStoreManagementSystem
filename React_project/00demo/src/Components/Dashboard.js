import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Navbar';
import Footer from './Footer';
import '../Styles/home.css';
import BookSeries from './BookSeries';
import Fantasy from './Fantasy';
import SelfHelp from './SelfHelp';
import Manga from './Manga';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Advertisments from './Advertisments';
import BottomAds from './BottomAds';
function Dashboard() {

   return (
      <>
         <Navbar1/>
         <Navbar2/>
         <Advertisments/>
         <BookSeries/>
         <Fantasy/>
         <SelfHelp/>
         <Manga/>
         <BottomAds/>
         <Footer/>
      </>
   )
}

export default Dashboard;