import './Styles/componentStyles.css';
import {Link, Switch, Route} from 'react-router-dom';

function MyNavbar1(){
    return (
        <>
        <nav className="navbar navTop">
            <img src="/ProjectAssets/logo.png" alt="" className='logo-image' />
            <div className="searchBar">
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            </div>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/profile">Profile</Link>
            
            
            

        </nav>
        </>
    )
}

export default MyNavbar1;