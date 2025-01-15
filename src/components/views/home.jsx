import React, { useState, useEffect, useRef } from "react";
import CustomConnectButton from "../common/connectwallet";
import { useAccount } from 'wagmi';


const Home = () => {
  // State to track time left and progress bar width
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 0,
  });

  const [totalSeconds] = useState(600); // Total countdown seconds
  const [progressWidth, setProgressWidth] = useState(100); // Progress bar width percentage
  const [amountMatic, setAmountMatic] = useState();
  const [amountAR, setAmountAR] = useState();

  const account = useAccount();
  const timerRef = useRef(null); // UseRef for tracking the timer ID

  // Calculate and update time left every second
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const leftSeconds =
          prevTime.days * 24 * 60 * 60 +
          prevTime.hours * 60 * 60 +
          prevTime.minutes * 60 +
          prevTime.seconds - 1;

        const progress = (leftSeconds / totalSeconds) * 100;
        setProgressWidth(progress);

        // Stop countdown when time reaches zero
        if (leftSeconds <= 0) {
          clearInterval(timerRef.current);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(leftSeconds / (24 * 60 * 60));
        const hours = Math.floor((leftSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((leftSeconds % (60 * 60)) / 60);
        const seconds = leftSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, [totalSeconds]);

  const handleMaticChange = (e) => {
    const value = e.target.value;
    setAmountMatic(value);
    setAmountAR(value * 2); // Assuming 1 Matic = 10 AR
  };

  const handleARChange = (e) => {
    const value = e.target.value;
    setAmountAR(value);
    setAmountMatic(value / 2); // Assuming 1 Matic = 10 AR
  };

  return (
    <div className="slider-area d-flex align-items-center">
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
                <h2 className="wow fadeInUp" data-wow-delay=".2s">In Presale Now!</h2>
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
                <div className="progress-bar-container" style={{ marginTop: "15px" }}>
                  <div
                    className="progress-bar1"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <h5 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: 'center', textSizeAdjust: 'auto', marginTop: '10px' }}>TOTAL USD RAISED: $6,376,706.75</h5>
                <div style={{ display: "flex", alignItems: "center", marginTop: "15px", marginBottom: "40px" }}>
                  <hr class="line" />
                  <p class="text">1&nbsp;$AR+&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;$0.023525</p>
                  <hr class="line" />
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
                    <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                      <a href="#" style={{ width: '100%' }}>Buy Now</a>
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
