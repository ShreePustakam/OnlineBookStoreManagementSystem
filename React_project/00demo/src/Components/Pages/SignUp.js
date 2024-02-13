function SignUp()
{
    return(
            <div>
                <div className='SignUpImage'>
                    <center>

                        <div className="DivSignUp DivSignUp2 p-3 mb-2 bg-warning text-dark-">
                    <h1>SignUp Here</h1>
                        </div>

                        <div className="DivSignUp p-3 mb-2 text-black">

                            <table>

                                <tr> 
                                    <td>   
                                        <label class="form-label" for="autoSizingInputGroup">Username</label>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Email"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label class="form-label" for="typePhone">Contact Number</label>
                                        <input type="tel" id="typePhone" class="form-control" placeholder="Enter Contact Number" />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Password"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label for="inputPassword4" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Re-Enter Password"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                        <label class="form-check-label" for="gridRadios1">
                                            Are You A Student?
                                        </label>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <button type="submit" class="btn btn-primary">
                                            Sign in
                                        </button>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </center>

                
                </div>
            </div>
        )
}



export default SignUp;




