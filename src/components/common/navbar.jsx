import React from "react";

const Navbar = () => {
  return (
    <div className="header-area" id="sticky-header">
      <div className="container">
        <div className="row align-items-center d-flex">
          <div className="col-lg-3">
            <div className="header-logo">
              <a className="main-logo" href="index.html"><img src="assets/images/other.png" alt="" /></a>
              <a className="stiky-logo" href="index.html"><img src="assets/images/one.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-9">
            <nav className="cryptozen_menu">
              <div className="header-menu">
                <ul className="nav_scroll">
                  <li><a href="#">Home</a>
                  </li>
                  <li><a href="about.html">How to buy</a>
                  </li>
                  <li><a href="road-map.html">road map</a>
                  </li>
                  <li><a href="team.html">FaQs</a>
                  </li>
                </ul>
                <div className="sidebar">
                  <div className="header-src-btn">
                    <div className="search-box-btn search-box-outer"><i className="fas fa-search"></i></div>
                  </div>
                  <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2"></span></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;