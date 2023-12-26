import Dashboard from "./Components/Dashboard";
import NotFound from "./NotFound";
import ProtectedRoute from './ProtectedRoute';

import {Link, Switch, Route} from 'react-router-dom';
function Launcher() {
    return ( <>
                <h1>LOGO IMAGE</h1>
                <hr />
                <Link to="/home">Home</Link> {" | "}
                <Link to="/about">About Us</Link> {" | "}
                <Link to="/contact">Contact Us</Link> {" | "}
                <Link to="/db">Dashboard</Link> {" | "}
                <hr />
                   <Switch>
                        <Route path="/" component={Dashboard} exact />
                        <Route path="/home" component={Dashboard} exact />
                        <Route path="/about" component={Dashboard} exact />
                        <Route path="/contact" component={Dashboard} exact />
                        {/*<Route path="/db" component={Dashboard} exact />*/}
                        <ProtectedRoute path="/db" component={Dashboard} exact />
                        <Route path="*" component={NotFound} exact />
                    </Switch> 
                <hr />
                <center>
                    <h3>Made by Hrutik, 2023</h3>
                </center>

            </>

     );
}

export default Launcher;