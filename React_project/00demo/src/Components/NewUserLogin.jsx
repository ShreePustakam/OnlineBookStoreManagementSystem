import Nav from 'react-bootstrap/Nav';

function NewUserLogin(){
    return(
        <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        </>
    )
}

export default NewUserLogin;