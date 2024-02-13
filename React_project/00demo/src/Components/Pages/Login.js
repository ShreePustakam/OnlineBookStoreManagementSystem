function Login()
{
    return (
             <div>
                 <center>
                    {/* <div class="p-3 mb-2 bg-dark bg-gradient text-white">  p-3 mb-2 bg-warning bg-gradient text-dark*/}
                    {/* <div className="DivStyle p-3 mb-2 bg-dark bg-gradient text-white">
                        <h1> Welcome </h1>
                        <h2> Login Here </h2>
                    </div> */}

                   
                        <div className="DivStyle text-white">
                        <table>
                            <tr>
                                <td>
                                    {/* <label for="exampleInputEmail1" class="form-label"> */}
                                        {/* Email address */}
                                    {/* </label> */}
                                    
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">
                                        Email
                                    </label>

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
                                    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" aria-describedby="emailHelp" placeholder="Enter Email"/>

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label for="exampleInputPassword1" class="col-sm-2 col-form-label col-form-label-lg">
                                        Password
                                    </label>
                                </td>
                            </tr>   
                                
                            <tr>
                                <td>
                                    <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Enter Password"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button type="Login" class="btn btn-outline-light" style={{margin:'10px'}}>
                                        Sign-In
                                    </button>
                                </td>
                            </tr> 

                        </table>
                        {/* <h4>
                            <a href="/home/acer/Desktop/React/OnlineBookStoreManagementSystem/React_project/00demo/src/SignUp.js">Create Account</a>
                        </h4> */}

                        <div class="d-flex justify-content-center links" style={{margin:'10px'}}>
                            <h5>
					            Don't have an account?
                                <a href="/home/acer/Desktop/React/OnlineBookStoreManagementSystem/React_project/00demo/src/SignUp.js">
                                    Sign Up
                                </a>
                            </h5>
                        </div>

                        <div class="d-flex justify-content-center" style={{margin:'10px'}}>
                            <h5>
                                <a href="/home/acer/Desktop/React/OnlineBookStoreManagementSystem/React_project/00demo/src/SignUp.js">Forgot your password?</a>
                            </h5>
                        </div>
                    </div>
                    
                    
                </center>
             </div>
            )

}

export default Login;