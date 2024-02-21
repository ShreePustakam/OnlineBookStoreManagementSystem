import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserLogin(){

    const history = useHistory();

    function logout(){
        sessionStorage.clear();
        history.push("/home");
    }

    return(
        <>
         <Nav.Link href="/profile">{sessionStorage.getItem("userName")} s'Profile</Nav.Link>
         <button onClick={logout}>Logout</button>
        </>
    )
}

export default UserLogin;