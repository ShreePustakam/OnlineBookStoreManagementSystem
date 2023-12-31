import "../Styles/componentStyles.css";

function MyNavbar2() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light navbar2">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Geners
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <a class="dropdown-item" href="#fanatsy">
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fiction
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Non Fiction
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#selfhelp">
                      Self-Help
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Horror
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#bookset">
                      Book-Set
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#manga">
                      Manga
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar2;
