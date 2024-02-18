import Home from "./Pages/Home";
import Book from "./Book";
import {Link, Switch, Route} from 'react-router-dom';
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp";
import Cart from "./Cart"
import Wishlist from './Wishlist';
import Bill from './Bill';
import BookSet from "./BookSet";
import Orders from './Orders';
import UserProfile from "./Pages/UserProfile";


function App() {
    return (  
        <>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/book" component={Book} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/wishlist" component={Wishlist} exact />
            <Route path="/bill" component={Bill} exact />
            <Route path="/bookset" component={BookSet} exact />
            <Route path="/orders" component={Orders} exact />
            <Route path="/profile" component={UserProfile} exact />
        </Switch>
        </>
    );
}

export default App;