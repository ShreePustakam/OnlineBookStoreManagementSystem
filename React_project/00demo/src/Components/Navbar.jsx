
function Navbar() {
    return (<>
        <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand" href="#">PUSTAKAM</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">
<li className="nav-item active">
<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Dropdown
</a>
<div className="dropdown-menu" aria-labelledby="navbarDropdown">
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#">Something else here</a>
</div>
</li>
<li className="nav-item">
<a className="nav-link disabled" href="#">Disabled</a>
</li>
</ul>
<form className="form-inline my-2 my-lg-0">
<button className="btn btn-warning my-2 my-sm-0" type="submit">Login</button>

<button className="btn btn-success my-2 my-sm-0" type="submit">SignUp</button>

</form>
</div>
</nav>
</div>

<div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand" href="#">PUSTAKAM</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">

<form className="form-inline my-2 my-lg-0 " >
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
</form>
</div>
</nav>
</div>
    </>);
}

export default Navbar;