import CustomConnectButton from "./connectwallet";

const Navbar = () => {
  return (
    <div className="header-area" id="sticky-header">
      <div className="container">
        <div className="row align-items-center d-flex">
          <div className="col-lg-3">
            <div className="header-logo">
              <a className="main-logo" href="index.html"><img style={{ width: "60%" }} src="assets/images/other.png" alt="" /></a>
              <a className="stiky-logo" href="index.html"><img style={{ width: "60%" }} src="assets/images/one.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-9">
            <nav className="cryptozen_menu">
              <div className="header-menu" style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                <ul className="nav_scroll">
                  <li><a href="#home">Home</a>
                  </li>
                  <li><a href="#about">How to buy</a>
                  </li>
                  <li><a href="#roadmap">road map</a>
                  </li>
                  <li><a href="#faqs">FaQs</a>
                  </li>
                </ul>
                <CustomConnectButton />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;