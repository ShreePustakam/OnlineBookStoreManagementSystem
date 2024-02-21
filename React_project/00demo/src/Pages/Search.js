import react from "react";
import Navbar1User from "../Components/Navbar1User";
import Navbar1NewUser from "../Components/Navbar1NewUser";
import Navbar2 from "../Components/Navbar2";

function Search(){
    return (
        <>
        {sessionStorage.getItem("isLoggedIn") === "true" ? <Navbar1User/> : <Navbar1NewUser/>}
        <Navbar2/>
        
        </>
    )
}

export default Search;