import React, { useState, useEffect, useRef } from "react";
import CustomConnectButton from "../common/connectwallet";
import { useAccount } from "wagmi";

const Home = ({setStage, stage}) => {
   // Track the current stage (1 or 2)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 0,
  });

  const [amountMatic, setAmountMatic] = useState();
  const [amountAR, setAmountAR] = useState();
  const progressWidth = 88;

  const account = useAccount();
  const timerRef = useRef(null);
  const stageDurations = [60, 70]; // Stage durations in seconds
  const stagePrices = [0.5, 0.75]; // Prices for each stage
  const [totalSeconds, setTotalSeconds] = useState(stageDurations[0]); // Set initial duration

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const leftSeconds =
          prevTime.days * 24 * 60 * 60 +
          prevTime.hours * 60 * 60 +
          prevTime.minutes * 60 +
          prevTime.seconds - 1;

        if (leftSeconds <= 0) {
          clearInterval(timerRef.current);
          if (stage === 1) {
            // Move to stage 2
            setStage(2);
            setTotalSeconds(stageDurations[1]);
            setTimeLeft({
              days: 0,
              hours: 0,
              minutes: Math.floor(stageDurations[1] / 60),
              seconds: stageDurations[1] % 60,
            });
          } else {
            setStage(3)
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }
        }

        const days = Math.floor(leftSeconds / (24 * 60 * 60));
        const hours = Math.floor((leftSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((leftSeconds % (60 * 60)) / 60);
        const seconds = leftSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [totalSeconds, stage]);

  const handleMaticChange = (e) => {
    const value = e.target.value;
    setAmountMatic(value);
    setAmountAR(value / stagePrices[stage - 1]);
  };

  const handleARChange = (e) => {
    const value = e.target.value;
    setAmountAR(value);
    setAmountMatic(value * stagePrices[stage - 1]);
  };

  return (
    <div className="slider-area d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-7 col-md-7">
            <div className="slider-content">
              <div className="video-content">
                <img className="hero-image" src="assets/images/main5.png" alt="Hero" />
              </div>
              <h1 className="wow fadeInUp" data-wow-delay=".1s">
                Cryptozen<span> ICO</span>
              </h1>
              <h4 className="wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: "10px" }}>
                For the cryptocurrency business
              </h4>
              <div className="slider-button wow fadeInUp" data-wow-delay=".6s">
                <a href="#">Download Whitepapers</a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-5 col-md-5">
            <div className="countdown-area">
              <div className="countdown-content text-center">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  <span style={{ color: "#37A3FE" }}>Buy $AR+ Token</span>
                </h2>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  {stage == 1 ? "First Presale Now!" : ( stage ==2 ? "Second Presale Now!" : "Presale Finished!")}
                </h2>
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
                <div className="progress-bar-container" style={{ marginTop: "20px" }}>
                  <div
                    className="progress-bar1"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <h5 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: 'center', textSizeAdjust: 'auto', marginTop: '20px' }}>
                  TOTAL USD RAISED: $6,376,706.75
                </h5>
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginBottom: "20px" }}>
                  <hr className="line" />
                  <p className="text">{`1 $AR+ = ${stagePrices[stage - 1]} MATIC`}</p>
                  <hr className="line" />
                </div>
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
