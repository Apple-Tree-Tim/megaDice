import { useState, useEffect } from "react";
import CustomConnectButton from "../common/connectwallet";
import { useAccount } from "wagmi";
import useBuyToken from "../../hooks/useBuyToken";
import useGetBalance from "../../hooks/useGetBalance";

const Home = () => {
  const startDate = new Date("2025-03-01 00:00:00").getTime();
  const stage1EndDate = new Date("2025-04-01 00:00:00").getTime(); // Adjust date
  const stage2EndDate = new Date("2025-05-01 00:00:00").getTime(); // Adjust date

  const [stage1TimeLeft, setStage1TimeLeft] = useState({});
  const [stage2TimeLeft, setStage2TimeLeft] = useState({});
  const [currentStage, setCurrentStage] = useState(0);
  const [amountMatic, setAmountMatic] = useState("");
  const [amountAR, setAmountAR] = useState("");
  const stagePrices = [1, 1.5];

  const account = useAccount();

  const { buyToken, isBuying } = useBuyToken(amountMatic)
  const PRESALE_SUPPLY = 5_000_000_000;
  const { balance, getBalance } = useGetBalance("0x6794D2Ac1d6375bac41a03B7303146bF1E8EDbeb");

  const progressWidth = 100 - balance / PRESALE_SUPPLY * 100;
  const totalUSD = ((PRESALE_SUPPLY - balance) * stagePrices[0] * 0.32).toFixed(2);

  const calculateTimeLeft = (endTime) => {
    const now = new Date().getTime(); // ✅ Get current time
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Prevent negative values
    }

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();

      if (now < startDate) {
        setCurrentStage(0);
      } else if (now >= startDate && now < stage1EndDate) {
        setCurrentStage(1);
      } else if (now >= stage1EndDate && now < stage2EndDate) {
        setCurrentStage(2);
      } else {
        setCurrentStage(3);
      }

      setStage1TimeLeft(calculateTimeLeft(stage1EndDate));
      setStage2TimeLeft(calculateTimeLeft(stage2EndDate));
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000); // ✅ Update every second

    return () => clearInterval(interval); // ✅ Clean up interval
  }, []);

  useEffect(() => {
    getBalance();
  });

  const handleMaticChange = (e) => {
    const value = e.target.value;
    setAmountMatic(value);
    if (stage1TimeLeft != 0) {
      setAmountAR(value / stagePrices[0]);
    } else {
      setAmountAR(value / stagePrices[1]);
    }
  };

  const handleARChange = (e) => {
    const value = e.target.value;
    setAmountAR(value);
    if (stage1TimeLeft != 0) {
      setAmountMatic(value * stagePrices[0]);
    } else {
      setAmountMatic(value * stagePrices[1]);
    }
  };

  const handleBuyToken = async () => {
    const success = await buyToken(amountMatic);
    if (success) {
      // Reset input fields after successful purchase
      setAmountMatic("");
      setAmountAR("");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/whitepaper.pdf"; // Ensure the file is inside the 'public' folder
    link.download = "whitepaper.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderCountdown = (timeLeft, stagePrice, stageLabel) => (
    <div className="mb-[25px]" style={{ marginBottom: "20px" }}>
      <h3 className="wow fadeInUp" style={{ color: "#37a3fe", marginBottom: "5px" }} data-wow-delay=".2s">
        {stageLabel}
      </h3>
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
                  {String(timeLeft[unit] || 0).padStart(2, "0")}
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
              <div className="slider-button wow fadeInUp" data-wow-delay=".6s" onClick={handleDownload}>
                <a href="#">Download Whitepapers</a>
              </div>
              <div className="slider-button-telegram wow fadeInUp">
                <a href="https://t.me/ARPLUSTOKEN" target="_blank" rel="noopener noreferrer" style={{display: ""}}>
                  <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="countdown-area">
              <div className="countdown-content text-center">
                {renderCountdown(stage1TimeLeft, stagePrices[0], "First Stage Presale")}
                {renderCountdown(stage2TimeLeft, stagePrices[1], "Second Stage Presale")}
                {/* <div className="progress-bar-container" style={{ marginTop: "20px" }}>
                  <div className="progress-bar1" style={{ width: `${progressWidth}%` }}></div>
                </div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginBottom: "30px", gap: "10px" }}>
                  <hr className="line" />
                  <h5 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: "center", textSizeAdjust: "auto", marginBottom: "0px", fontSize: "18px" }}>
                    TOTAL USD RAISED: ${totalUSD}
                  </h5>
                  <hr className="line" />
                </div> */}

                <div className="walletList">
                  <a href="#"><img className="walletContent" src="assets/images/wallets/metamask.svg" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/trustwallet.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/coinbase.svg" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/phantom.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/mathwallet.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/tokenpocket.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/safepal.png" alt="" /></a>
                </div>
                {currentStage === 0 ? (
                  <div className="about-btn col-lg-12" style={{ textAlign: "center", marginTop: "20px" }}>
                    <a href="#" style={{ width: "100%" }}>Presale will start on March 1st</a>
                  </div>
                ) : currentStage === 3 ? (
                  <div className="about-btn col-lg-12" style={{ textAlign: "center", marginTop: "20px" }}>
                    <a href="#" style={{ width: "100%" }}>Presale Ended</a>
                  </div>
                ) : account.isConnected ? (
                  <>
                    <div className="row" style={{ marginTop: "30px" }}>
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
                    <div className="about-btn col-lg-12" style={{ textAlign: "center", marginTop: "0px" }}>
                      <a href="#" style={{ width: "100%" }} onClick={handleBuyToken} disabled={isBuying}>{isBuying ? "Buying..." : "Buy Now"}</a>
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
    </div >
  );
};

export default Home;
