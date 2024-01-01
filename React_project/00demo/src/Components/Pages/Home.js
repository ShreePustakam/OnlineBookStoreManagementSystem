import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Footer';
import '../Styles/home.css';
import BookSeries from '../BookSeries';
import Fantasy from '../Fantasy';
import SelfHelp from '../SelfHelp';
import Manga from '../Manga';
import Navbar1 from '../Navbar1';
import Navbar2 from '../Navbar2';
import Advertisments from '../Advertisments';
import BottomAds from '../BottomAds';
import Book from '../Book';
import { Router , Switch, Route} from 'react-router-dom';
function Home() {

   return (
      <>
         <Advertisments/>
         <BookSeries/>
         <Fantasy/>
         <SelfHelp/>
         <Manga/>
         <BottomAds/>   
      </>
   )
}

export default Home;