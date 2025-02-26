import { useState, useEffect } from "react";
import CustomConnectButton from "../common/connectwallet";
import { useAccount } from "wagmi";
import useBuyToken from "../../hooks/useBuyToken";
import useGetBalance from "../../hooks/useGetBalance";

const Home = () => {
  // ✅ Use a fixed date format without "Z" to prevent timezone issues
  const stage1EndDate = new Date("2025-04-01 00:00:00").getTime(); // Adjust date
  const stage2EndDate = new Date("2025-05-01 00:00:00").getTime(); // Adjust date

  const [stage1TimeLeft, setStage1TimeLeft] = useState({});
  const [stage2TimeLeft, setStage2TimeLeft] = useState({});

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
      setStage1TimeLeft(calculateTimeLeft(stage1EndDate));
      setStage2TimeLeft(calculateTimeLeft(stage2EndDate));
    };

    updateCountdown(); // ✅ Run immediately

    const interval = setInterval(updateCountdown, 1000); // ✅ Update every second

    return () => clearInterval(interval); // ✅ Clean up interval
  }, []);

  useEffect(() => {
    getBalance();
    console.log(balance);

  })
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
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="countdown-area">
              <div className="countdown-content text-center">
                {renderCountdown(stage1TimeLeft, stagePrices[0], "First Stage Presale")}
                {renderCountdown(stage2TimeLeft, stagePrices[1], "Second Stage Presale")}
                <div className="progress-bar-container" style={{ marginTop: "20px" }}>
                  <div className="progress-bar1" style={{ width: `${progressWidth}%` }}></div>
                </div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginBottom: "30px", gap: "10px" }}>
                  <hr className="line" />
                  <h5 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: "center", textSizeAdjust: "auto", marginBottom: "0px", fontSize: "18px" }}>
                    TOTAL USD RAISED: ${totalUSD}
                  </h5>
                  <hr className="line" />
                </div>



                <div className="walletList">
                  <a href="#"><img className="walletContent" src="assets/images/wallets/metamask.svg" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/trustwallet.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/coinbase.svg" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/phantom.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/mathwallet.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/tokenpocket.png" alt="" /></a>
                  <a href="#"><img className="walletContent" src="assets/images/wallets/safepal.png" alt="" /></a>
                </div>
                {account.isConnected ? (
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
    </div>
  );
};

export default Home;
