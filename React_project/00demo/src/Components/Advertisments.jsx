function Advertisments() {
  return (
    <>
      <div id="carouselExampleInterval10" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/ProjectAssets/Ads/Ad1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/ProjectAssets/Ads/Ad2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/ProjectAssets/Ads/Ad3.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/ProjectAssets/Ads/Ad4.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/ProjectAssets/Ads/Ad5.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/ProjectAssets/Ads/Ad6.jpg" className="d-block w-100" alt="..."/>
                </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval10" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>  
    </div>
    </>
  );
}

export default Advertisments;
