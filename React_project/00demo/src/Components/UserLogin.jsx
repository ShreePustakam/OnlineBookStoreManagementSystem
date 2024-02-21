import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom";
function UserLogin() {

    const history = useHistory();

    function logout() {
        sessionStorage.clear();
        history.push("/home");
    }

    return (
        <>
            <Nav.Link href="/profile">{sessionStorage.getItem("userName")} s'Profile</Nav.Link>

            <a href="#" class="user-link" onClick={logout}>
                <Link to="/editprofile">Logout </Link>
            </a>
        </>
    )
}

export default UserLogin;
