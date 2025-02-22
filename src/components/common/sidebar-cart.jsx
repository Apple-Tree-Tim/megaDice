import React from "react";

const SidebarCart = () => {
  return (
    <div className="xs-sidebar-group info-group">
      <div className="dt-overlay bt-black"></div>
      <div className="dt-sidebar-widget">
        <div className="sidebar-container">
          <div className="widget-top">
            <a href="#" className="close">
              X
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <a href="index.html"><img style={{ width: "60%" }} src="assets/images/one.png" alt="" /></a>
                </div>
                <div className="content-text">
                  <p className="text-white">The argument in placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas etiusto odio data center.</p>

                </div>
                <div className="contact-info">
                  <div className="location-content d-flex">
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="location-content-text">
                      <p>13/A Tropical center Rs <br />london WC1B 4EA </p>
                    </div>
                  </div>
                </div>
                <div className="footer-location-box">
                  <div className="location-content d-flex">
                    <div className="location-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="location-content-text">
                      <p>+8 91230 456 788</p>
                    </div>
                  </div>
                </div>
                <div className="footer-location-box">
                  <div className="location-content">
                    <div className="location-title">
                      <h2>Open Hours</h2>
                    </div>
                    <div className="location-content-text">
                      <p>Mon-Sat: 8 am-5 pm <br />Sunday Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-icon pt-40">
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarCart;