import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const ProgressBar = ({ soldTokenAmount, totalTokenAmount }) => {
  const progressWidth = (soldTokenAmount / totalTokenAmount) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar1"
        style={{ width: `100%` }}
      >
        <div
          className="progress-bar2"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

const Countdown = () => {
  return (
    <div className="countdown-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="countdown-content text-center">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Buy $AR+ Token</h2>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">In Presale Now!</h2>
              <div className="countdown wow fadeInUp" data-wow-delay=".4s">
                <div className="countdown-item">
                  <div className="countdown-item-inner">
                    <div className="countdown-days">
                      <div className="countdown-label">Days</div>
                      <div className="countdown-value">00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-item-inner">
                    <div className="countdown-hours">
                      <div className="countdown-label">Hours</div>
                      <div className="countdown-value">00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-item-inner">
                    <div className="countdown-minutes">
                      <div className="countdown-label">Minutes</div>
                      <div className="countdown-value">00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-item-inner">
                    <div className="countdown-seconds">
                      <div className="countdown-label">Seconds</div>
                      <div className="countdown-value">00</div>
                    </div>
                  </div>
                </div>
              </div>
              <ProgressBar soldTokenAmount={100} totalTokenAmount={1000} />
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="slider-area d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="slider-content ">
              <div className="video-content">
                <img className="hero-image" src="assets/images/main5.png" alt="" />
              </div>
              <h1 className="wow fadeInUp" data-wow-delay=".1s">Cryptozen<span> ICO</span></h1>
              <h4 className="wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: "10px" }}>
                for the cryptorency business
              </h4>
              <div className="slider-button wow fadeInUp" data-wow-delay=".6s">
                <a href="#">Download Whitepapers</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <Countdown />
          </div>
        </div>
      </div>
      <div className="shape">
        <img src="assets/images/hero/shape.png" alt="" />
      </div>
    </div >
  );
};

export default Home;