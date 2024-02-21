import Home from "../Pages/Home";
import {Link, Switch, Route} from 'react-router-dom';
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp";
import BookSet from "./BookSet";
import OrdersDisplay from "../Pages/OrdersDisplay";
import UserProfile from "../Pages/UserProfile";
import BookDisplay from "../Pages/BookDisplay";
import CartDisplay from "../Pages/CartDisplay";
import WishlistDisplay from "../Pages/WishlistDisplay";
import AboutUs from "../Pages/AboutUs";
import EditProfile from "../Pages/EditProfile";
import AdminProfile from "../Pages/AdminProfile";
import AddBookImgByAdmin from "../Pages/AddBookImgByAdmin";
import AddBookByAdmin from "../Pages/AddBookByAdmin";
import Bill from "./Bill";
import AllOrdersDisplay from "../Pages/AllOrdersDisplay";
import AllBookDisplay from "../Pages/AllBookDisplay";
import UpdateBookByAdmin from "../Pages/UpdateBookByAdmin";
import Search from "../Pages/Search";

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
            {/* <Route path="/bill" component={BillPage} exact /> */}
            <Route path="/bookset" component={BookSet} exact />
            <Route path="/orders" component={OrdersDisplay} exact />
            <Route path="/profile" component={UserProfile} exact />
            <Route path="/editprofile" component={EditProfile} exact/>
            <Route path="/wishlist" component={WishlistDisplay} exact />
            <Route path="/aboutus" component={AboutUs} exact/>
            <Route path="/adminprofile" component={AdminProfile} exact/>
            <Route path="/addbook" component={AddBookByAdmin} exact />
            <Route path="/addbookimg" component={AddBookImgByAdmin} exact />
            <Route path="/bill" component={Bill} exact />
            <Route path="/allorders" component={AllOrdersDisplay} exact />
            <Route path="/allbooks" component={AllBookDisplay} exact />
            <Route path="/update" component={UpdateBookByAdmin} exact />
            <Route path="/searchresult" component={Search} exact />

        </Switch>
        </>
    );
}

export default App;