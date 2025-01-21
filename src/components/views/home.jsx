import React, { useState, useEffect } from "react";
import CustomConnectButton from "../common/connectwallet";
import { useAccount } from "wagmi";

const Home = () => {
  const [stage1TimeLeft, setStage1TimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [stage2TimeLeft, setStage2TimeLeft] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [amountMatic, setAmountMatic] = useState("");
  const [amountAR, setAmountAR] = useState("");
  const stagePrices = [1, 1.5]; // Prices for stages 1 and 2
  const account = useAccount();
  const progressWidth = 88;

  const updateTimeLeft = (timeLeft, setTimeLeft) => {
    setTimeLeft((prevTime) => {
      const leftSeconds =
        prevTime.days * 24 * 60 * 60 +
        prevTime.hours * 60 * 60 +
        prevTime.minutes * 60 +
        prevTime.seconds - 1;

      if (leftSeconds <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(leftSeconds / (24 * 60 * 60));
      const hours = Math.floor((leftSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((leftSeconds % (60 * 60)) / 60);
      const seconds = leftSeconds % 60;

      return { days, hours, minutes, seconds };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimeLeft(stage1TimeLeft, setStage1TimeLeft);
      updateTimeLeft(stage2TimeLeft, setStage2TimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [stage1TimeLeft, stage2TimeLeft]);

  const handleMaticChange = (e) => {
    const value = e.target.value;
    setAmountMatic(value);
    setAmountAR(value / stagePrices[0]); // Default to stage 1 price
  };

  const handleARChange = (e) => {
    const value = e.target.value;
    setAmountAR(value);
    setAmountMatic(value * stagePrices[0]); // Default to stage 1 price
  };

  const renderCountdown = (timeLeft, stagePrice, stageLabel) => (
    <div style={{ marginBottom: "25px" }}>
      <h3 className="wow fadeInUp" style={{ color: "#37a3fe", marginBottom: "5px" }} data-wow-delay=".2s">{stageLabel}</h3>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <hr className="line" />
        <h4 className="wow fadeInUp" style={{ fontSize: "20px", margin: "0 10px" }} data-wow-delay=".2s">
          Token Price: {stagePrice} MATIC
        </h4>
        <hr className="line" />
      </div>

      <div className="countdown wow fadeInUp" data-wow-delay=".4s">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div className="countdown-item" key={index}>
            <div className="countdown-item-inner">
              <div className={`countdown-${unit}`}>
                <div className="countdown-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                <div className="countdown-value">
                  {Math.floor(timeLeft[unit] / 10)}
                  {timeLeft[unit] % 10}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="slider-area d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="slider-content">
              <div className="video-content">
                <img className="hero-image" src="assets/images/main5.png" alt="Hero" />
              </div>
              <h1 className="wow fadeInUp" data-wow-delay=".1s">
                <span>AR+ </span> Token Presale
              </h1>
              <h4 className="wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: "10px" }}>
                Take advantage of our <span>two-stage presale process</span>. Buy earlier to get a discount!
              </h4>
              <div className="slider-button wow fadeInUp" data-wow-delay=".6s">
                <a href="#">Download Whitepapers</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="countdown-area">
              <div className="countdown-content text-center">
                {renderCountdown(stage1TimeLeft, stagePrices[0], "First Stage Presale")}
                {renderCountdown(stage2TimeLeft, stagePrices[1], "Second Stage Presale")}
                <div className="progress-bar-container" style={{ marginTop: "20px" }}>
                  <div
                    className="progress-bar1"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <h5 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: 'center', textSizeAdjust: 'auto', marginTop: '20px' }}>
                  TOTAL USD RAISED: $6,376,706.75
                </h5>
                <hr style={{margin: "20px 0px"}} />
                {account.isConnected ? (
                  <>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_box mb-2">
                          <input
                            className="form-control"
                            inputMode="numeric"
                            name="matic"
                            value={amountMatic}
                            onChange={handleMaticChange}
                            placeholder="Buy with MATIC"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_box mb-2">
                          <input
                            className="form-control"
                            inputMode="numeric"
                            name="ar"
                            value={amountAR}
                            onChange={handleARChange}
                            placeholder="Receive $AR+"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="about-btn mt-20 col-lg-12" style={{ textAlign: "center" }}>
                      <a href="#" style={{ width: "100%" }}>Buy Now</a>
                    </div>
                  </>
                ) : (
                  <CustomConnectButton accountStatus="full" showBalance={false} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
        <img src="assets/images/hero/shape.png" alt="Shape" />
      </div>
    </div>
  );
};

export default Home;
