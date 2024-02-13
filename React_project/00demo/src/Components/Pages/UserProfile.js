function UserProfile()
{
    return( 
            <div>
                
                <div className=' DivUser text-white '>
                {/* p-3 mb-2 bg-dark bg-gradient text-white  */}
                    <center>
                        <img src="http://localhost:3000/profile.png" alt="Rounded circle Image" className="Icon rounded-circle"></img>

                        <h1>Welcome Aseem</h1>
                        <h2>@ShreePustakam</h2>

                        <div class="container">
                            <div class="container">
                                <div class="row" >

                                    <div class="col">
                                        <h3 className='left'>Username:</h3>
                                    </div>

                                    <div class="col">
                                        <h3 className='right'>Aseem Vairagi</h3>
                                    </div>

                                    <div class="w-100"></div>

                                    <div class="col">
                                        <h3 className='left'>Email:</h3>
                                    </div>

                                    <div class="col">
                                        <h3 className='right'>aseem@ShreePustakam.com</h3>
                                    </div>

                                    <div class="w-100"></div>

                                    <div class="col">
                                        <h3 className='left'>DOB:</h3>
                                    </div>

                                    <div class="col">
                                        <h3 className='right'>16-06-2002</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col">
                                    <a href='...'><h3>Your Order</h3></a>
                                </div>

                                <div class="col">
                                <div class="col">
                                    <a href='...'><h3>Your Cart</h3></a>
                                </div>
                                </div>

                                <div class="col">
                                <div class="col">
                                    <a href='...'><h3>Your Wishlist</h3></a>
                                </div>

                            </div>

                            <div class="row">

                                <div class="col"></div>

                                <div class="col">
                                    <div class="col">
                                    <button type='SignOut' href="..." class="btn btn-primary Btn">SignOut</button>
                                    </div>
                                </div>

                                <div class="col">  
                                    <div class="col">
                                    </div>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                    </center>
                </div>
            </div>
          )
}

export default UserProfile;