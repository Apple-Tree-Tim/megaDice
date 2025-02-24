import React from "react";

const Roadmap = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/whitepaper.pdf"; // Ensure the file is inside the 'public' folder
    link.download = "whitepaper.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="road-map pt-100 pb-100" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title text-center pb-20">
              <div className="dreamit-section-sub-title">
                <h5>ROAD MAP</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1>Our Strategy & Project Plan</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row tooper pt-140">
          <div className="col-lg-1"></div>
          <div className="col-lg-4 col-md-6">
            <div className="single-road-map-box mt-140">
              <div className="road-map-content">
                <h3>Platform and Ecosystem Development</h3>
                <div className="road-map-list">
                  <ul>
                    <li>Mobile app & website update (Apr – Jun 2025)</li>
                    <li>Mapping & zoning (Jul 2025)</li>
                    <li>VR/AR equipment & character sales (Oct 2025)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>

          <div className="col-lg-4 col-md-6">
            <div className="single-road-map-box two" style={{"paddingRight": "35px"}}>
              <div className="road-map-content">
                <h3>Token Launch & Listings</h3>
                <div className="road-map-list">
                  <ul>
                    <li>Website development & community building (Jan – Feb 2025)</li>
                    <li>First & second launch sales (Feb – Apr 2025)</li>
                    <li>Exchange negotiations & listings (Apr – Dec 2025)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row pt-70">
          <div className="col-lg-1"></div>
          <div className="col-lg-4 col-md-6">
            <div className="single-road-map-box three mt-140"  style={{"paddingRight": "35px"}}>
              <div className="road-map-content">
                <h3>Business & Strategic Growth</h3>
                <div className="road-map-list">
                  <ul>
                    <li>Company establishment voting (Aug – Sep 2025)</li>
                    <li>Partnerships with VR/AR manufacturers & developers (Sep 2025)</li>
                    <li>Continued exchange listings & business expansion (2025 – 2026)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>

          <div className="col-lg-4 col-md-6">
            <div className="single-road-map-box two"  style={{"paddingRight": "35px"}}>
              <div className="road-map-content">
                <h3>VR/AR Gaming & Events</h3>
                <div className="road-map-list">
                  <ul>
                    <li>Treasure hunt game (Aug 2025)</li>
                    <li>First digital concert (Oct 2025)</li>
                    <li>VR/AR games development & launches (Oct 2025 – Mar 2026)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row topper2 pt-100">
          <div className="col-lg-12">
            <div className="road-map-btn text-center">
              <a href="#">View Full Road Map </a>
            </div>
          </div>
        </div>
        <div className="row upper5 align-items-center mt-90">

          <div className="col-lg-6 col-md-12">
            <div className="dreamit-section-title  pb-20">
              <div className="dreamit-section-main-title">
                <h1>Why Choose Our Token?</h1>
              </div>
              <div className="dreamit-section-content-text">
                <p>Monotonectally productivate virtual benefits vis-a-vis clicks and mortar lead
                  ship. Seamlessly generate user friendly opportunitie after principle centered
                  markets. Proactively visualize functional</p>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-lg-6 col-md-6">
                <div className="single-road-icon-box d-flex align-items-center">
                  <div className="road-icon">
                    <i className="flaticon-checked"></i>
                  </div>
                  <div className="icon-content">
                    <h4>White Papers</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-road-icon-box d-flex align-items-center">
                  <div className="road-icon two">
                    <i className="flaticon-checked"></i>
                  </div>
                  <div className="icon-content">
                    <h4>Turn of Coin Sale</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-road-icon-box d-flex align-items-center">
                  <div className="road-icon three ">
                    <i className="flaticon-checked"></i>
                  </div>
                  <div className="icon-content">
                    <h4>Privacy Policy</h4>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-road-icon-box d-flex align-items-center">
                  <div className="road-icon four">
                    <i className="flaticon-checked"></i>
                  </div>
                  <div className="icon-content">
                    <h4>Token Details</h4>
                  </div>
                </div>
              </div>

            </div>
            <div className="road-icon-btn" onClick={handleDownload}>
              <a href="#">Dounload <i className="flaticon-angle-arrow-down"></i></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="road-thumb bounce-animate4">
              <img src="assets/images/map/book2.png" alt="" />
              <div className="shape7 bounce-animate2">
                <img src="assets/images/map/shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape6">
          <img src="assets/images/line2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;