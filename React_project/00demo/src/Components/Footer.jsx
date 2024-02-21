import '../Styles/footerStyle.css';

function Footer() {
  return (
    <div className='footer-div' style={{ backgroundColor: "#FFF6F6" }}>
      <section className="top-footer">
        <div>
          <a href="#988" className="me-4 text-reset">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#jkdf" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#96" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#78" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#786" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ShreePustakam/OnlineBookStoreManagementSystem" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="p-4">
        <footer className="">
          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className=" mb-4 logo-font">
                    <i className="fas fa-gem me-3" style={{ color: "F875AA" }} ></i>PUSTAKAM
                  </h6>
                  <p>
                    "Empowering Your Literary Journey: Pustakam - Unleash the Chapters of Excellence in Online Bookstore Management."
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Geners Available
                  </h6>
                  <p>
                    <a href="#selfhelp" className="text-reset">SELFHELP</a>
                  </p>
                  <p>
                    <a href="#manga" className="text-reset">MANGA</a>
                  </p>
                  <p>
                    <a href="#fantasy" className="text-reset">FANTASY</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">HORROR</a>
                  </p>
                  <p>
                    <a href="#" className="text-reset">FICTION</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="/aboutus" className="text-reset">About us</a>
                  </p>
                  <p>
                    <a href="/home" className="text-reset">Home</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i> Sunbeam Infotech</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    shreepustakam.bookstore@gmail.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 91 8989137815</p>
                </div>
              </div>
            </div>
          </section>

        </footer>
      </section>

      <div style={{ textAlign: "center" }}>
        <h6 style={{ color: "#D14D72" }}>© 2024 Copyright <a style={{ color: "#B9005B" }}> PUSTAKAM</a> </h6>
      </div>

    </div>
  );
}

export default Footer;