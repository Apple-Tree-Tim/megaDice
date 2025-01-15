import React from "react";

const Team = () => {
  return (
    <div className="team-section pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title text-center pb-20">
              <div className="dreamit-section-sub-title">
                <h5>OUR TEAM</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1>Meet Our Expert Team</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-thumb">
                <img src="assets/images/team/team-1.png" alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content">
                <h3>John Abraham</h3>
                <span>Head of Marketing</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-thumb">
                <img src="assets/images/team/team-2.png" alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content two">
                <h3>Robert Philips</h3>
                <span>Chef Executive</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-thumb">
                <img src="assets/images/team/team-3.png" alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content three">
                <h3>Sandra Irvin</h3>
                <span>HR Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-thumb">
                <img src="assets/images/team/team-4.png" alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content four">
                <h3>Julia Pacheco</h3>
                <span>CEO & Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;