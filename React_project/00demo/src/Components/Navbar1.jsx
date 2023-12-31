import '../Styles/componentStyles.css';

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
        </nav>
        </>
    )
}

export default MyNavbar1;