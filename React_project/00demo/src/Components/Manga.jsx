import '../Styles/componentStyles.css'

function Manga(){
    return(
        <>
         <div className='componentDiv' id='manga'>
            <h2>Manga</h2>
            <div className="cardHolder">
                <div className="card">
                <button type="button" class="btn btn-default btn-heart">
                    <span class="glyphicon glyphicon-heart"></span>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <img src="/ProjectAssets/Manga/DBZ.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dragon Ball Z</h5>
                        <div className='pricing'>
                        <h6>₹3220</h6>
                        <h6>⭐⭐</h6>
                        </div>
                    </div>
                </div>

                <div className="card">
                <button type="button" class="btn btn-default btn-heart">
                    <span class="glyphicon glyphicon-heart"></span>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <img src="/ProjectAssets/Manga/JJK.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Jujutsu Kaisen</h5>
                        <div className='pricing'>
                        <h6>₹3220</h6>
                        <h6>⭐⭐</h6>
                        </div>
                    </div>
                </div>

                <div className="card">
                <button type="button" class="btn btn-default btn-heart">
                    <span class="glyphicon glyphicon-heart"></span>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <img src="/ProjectAssets/Manga/DemonSlayer.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Demon Slayer</h5>
                        <div className='pricing'>
                        <h6>₹3220</h6>
                        <h6>⭐⭐</h6>
                        </div>
                    </div>
                </div>

                <div className="card">
                <button type="button" class="btn btn-default btn-heart">
                    <span class="glyphicon glyphicon-heart"></span>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <img src="/ProjectAssets/Manga/kochikame.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Kochikame</h5>
                        <div className='pricing'>
                        <h6>₹3220</h6>
                        <h6>⭐⭐</h6>
                        </div>
                    </div>
                </div>

                <div className="card">
                <button type="button" class="btn btn-default btn-heart">
                    <span class="glyphicon glyphicon-heart"></span>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <img src="/ProjectAssets/Manga/Naruto.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Naruto Shippuden</h5>
                        <div className='pricing'>
                        <h6>₹3220</h6>
                        <h6>⭐⭐</h6>
                        </div>
                    </div>
                </div>

                <div className="card">
                <button type="button" class="btn btn-default btn-heart">
                    <span class="glyphicon glyphicon-heart"></span>
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <img src="/ProjectAssets/Manga/SoyXFamily.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Spy X Family</h5>
                        <div className='pricing'>
                        <h6>₹3220</h6>
                        <h6>⭐⭐</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Manga;