import React from "react";

const MobileNavbar = () => {
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
      <div className="mobile-menu">
        <nav className="itsoft_menu">
          <ul className="nav_scroll">
            <li><a href="#">demo</a>
              <div className="sub-menu">
                <ul>
                  <li><a href="index.html">homepage one</a></li>
                  <li><a href="index-2.html">homepage two </a></li>
                  <li><a href="index-3.html">homepage three </a></li>
                  <li><a href="index-4.html">homepage four</a></li>
                  <li><a href="index-9.html">homepage five New</a></li>
                  <li><a href="index-6.html">animation page</a></li>
                  <li><a href="index-5.html">Landing Page 01</a></li>
                  <li><a href="index-7.html">Landing Page 02</a></li>
                  <li><a href="index-8.html">Home Video</a></li>
                  <li><a href="index-10.html">Home Particles</a></li>
                </ul>
              </div>
            </li>
            <li><a href="about.html">about</a>
            </li>
            <li><a href="#">pages</a>
              <div className="sub-menu">
                <ul>
                  <li><a href="about.html">about us </a></li>
                  <li><a href="team.html">our team</a></li>
                  <li><a href="token.html">token</a></li>
                  <li><a href="road-map.html">road</a></li>
                  <li><a href="contact.html">contact</a></li>
                  <li><a href="choose.html">choose</a></li>
                  <li><a href="faq.html">faq</a></li>
                  <li><a href="blog-details.html">blog details</a></li>
                  <li><a href="blog-grid.html">blog grid</a></li>
                </ul>
              </div>
            </li>
            <li><a href="road-map.html">road map</a>
            </li>
            <li><a href="team.html">team</a>
            </li>
            <li><a href="contact.html">contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;