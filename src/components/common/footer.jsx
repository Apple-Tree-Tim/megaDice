const Footer = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/whitepaper.pdf"; // Ensure the file is inside the 'public' folder
    link.download = "whitepaper.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="footer pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-location-box">
              <div className="footer-logo">
                <img src="assets/images/one.png" style={{ width: "60%" }} alt="Footer-logo" />
              </div>
              <div className="footer-content">
                <p>AR+ Token is the platform's virtual currency for all transactions.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <div className="footer-quick-link">
                <div className="footer-widget-title">
                  <h3>Help Links</h3>
                </div>
                <div className="footer-quick-link-list">
                  <ul>
                    <li><a href="#about">What Is AR+</a></li>
                    <li><a href="#token">Token</a></li>
                    <li><a href="#roadmap">Road Map</a></li>
                    <li><a href="#purchaseway">How to buy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <div className="footer-quick-link-list">
                <div className="footer-widget-title">
                  <h3>Quick Links</h3>
                </div>
                <div className="footer-quick-link-list">
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#" onClick={handleDownload}>White Papers</a></li>
                    <li><a href="#team">Teams</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="widget">
              <div className="footer-popular-post ">
                <div className="footer-widget-title two">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-content-text">
                  <p>Sent Us a Newsletter And Get Update</p>
                </div>
                <form>
                  <div className="subscribe-area">
                    <input className="subscribe-mail-box" type="email" placeholder="Enter Your Email...." required="" />
                      <button className="subscribe-button" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row upper11 mt-50 align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="footer-copyright-text">
              <p className="text-white">Copyright © cryptozen all rights reserved. </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-copyright-content">
              <div className="footer-sicial-address-link">
                <ul>
                  <li><a href="#">Terms Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;