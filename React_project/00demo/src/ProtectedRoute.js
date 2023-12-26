import Dashboard from "./Components/Dashboard";
import Login from "./Login";
import {Route} from 'react-router-dom';

function ProtectedRoute(props) {
    
    var isUserLoggedIn = window.sessionStorage.getItem("isUserLoggedIn");


    if(isUserLoggedIn==="true") //check for token is available
    {
        return <Route path={props.path} component={props.component} exact/>
    }
    else
    {
        return <Login/>
    }
}

export default ProtectedRoute;