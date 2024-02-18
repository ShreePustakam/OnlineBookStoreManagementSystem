import Home from "../Pages/Home";
import {Link, Switch, Route} from 'react-router-dom';
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp";
import Cart from "./Cart"
import Wishlist from './Wishlist';
import Bill from './Bill';
import BookSet from "./BookSet";
import Orders from './Orders';
import UserProfile from "../Pages/UserProfile";
import BookDisplay from "../Pages/BookDisplay";
import CartDisplay from "../Pages/CartDisplay";

function App() {
    return (  
        <>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/book" component={BookDisplay} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/cart" component={CartDisplay} exact />
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