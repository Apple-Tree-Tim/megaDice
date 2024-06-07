import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Home = () => {
  return (
    <div className="slider-area d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="slider-content ">
              <div className="video-content">
                <video
                  src="assets/images/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="#"
                  className="lazy-video"
                />
              </div>
              <h1 className="wow fadeInUp" data-wow-delay=".1s">Cryptozen<span> ICO</span></h1>
              <h4 className="wow fadeInUp" data-wow-delay=".3s" style={{marginBottom: "10px"}}>
                for the cryptorency business
              </h4>
              <div className="slider-button wow fadeInUp" data-wow-delay=".6s">
                <a href="#">Download Whitepapers</a>
              </div>
              <div className="slider-btn wow fadeInUp" data-wow-delay=".6s">
                <a href="#">How it Works</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 phonebackground">
            <h3 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: 'center' }}>Mega Dice Presale</h3>
            <div className="wow fadeInUp single-process-box" data-wow-delay=".1s" style={{ marginBottom: '20px' }}>
              <div className="text">Raised - 1960 Tokens</div>
              <span className="right">Target - 250,000 Tokens</span>
              <div className="process-bar-wordpress"></div>
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: 'center' }}>$USD RAISED: $1,376,706.75</h5>
            <p className="wow fadeInUp" data-wow-delay=".1s" style={{ textAlign: 'center' }}>BUY BEFORE NEXT STAGE PRICE INCREASE</p>
            <div className="row pt-25">
              <div className="col-lg-12">
                <div className="tab-content text-center" style={{ display: "flex", justifyContent: "center" }}>
                  <ul className="tabs">
                    <li className="active" rel="wallettabs1">
                      <ConnectButton.Custom>
                        {({
                          account,
                          chain,
                          openAccountModal,
                          openChainModal,
                          openConnectModal,
                          authenticationStatus,
                          mounted,
                        }) => {
                          // Note: If your app doesn't use authentication, you
                          // can remove all 'authenticationStatus' checks
                          const ready = mounted && authenticationStatus !== 'loading';
                          const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                              authenticationStatus === 'authenticated');

                          return (
                            <div
                              {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                  opacity: 0,
                                  pointerEvents: 'none',
                                  userSelect: 'none',
                                },
                              })}
                            >
                              {(() => {
                                if (!connected) {
                                  return (
                                    <div onClick={openConnectModal} type="button">
                                      SOL
                                    </div>
                                  );
                                }

                                return (
                                  <div onClick={openAccountModal} type="button">
                                    SOL
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        }}
                      </ConnectButton.Custom>
                    </li>
                    <li rel="wallettabs2">
                      <ConnectButton.Custom>
                        {({
                          account,
                          chain,
                          openAccountModal,
                          openChainModal,
                          openConnectModal,
                          authenticationStatus,
                          mounted,
                        }) => {
                          // Note: If your app doesn't use authentication, you
                          // can remove all 'authenticationStatus' checks
                          const ready = mounted && authenticationStatus !== 'loading';
                          const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                              authenticationStatus === 'authenticated');

                          return (
                            <div
                              {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                  opacity: 0,
                                  pointerEvents: 'none',
                                  userSelect: 'none',
                                },
                              })}
                            >
                              {(() => {
                                if (!connected) {
                                  return (
                                    <div onClick={openConnectModal} type="button">
                                      ETH
                                    </div>
                                  );
                                }

                                return (
                                  <div onClick={openAccountModal} type="button">
                                    ETH
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        }}
                      </ConnectButton.Custom>
                    </li>
                    <li rel="wallettabs3">
                      <ConnectButton.Custom>
                        {({
                          account,
                          chain,
                          openAccountModal,
                          openChainModal,
                          openConnectModal,
                          authenticationStatus,
                          mounted,
                        }) => {
                          // Note: If your app doesn't use authentication, you
                          // can remove all 'authenticationStatus' checks
                          const ready = mounted && authenticationStatus !== 'loading';
                          const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                              authenticationStatus === 'authenticated');

                          return (
                            <div
                              {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                  opacity: 0,
                                  pointerEvents: 'none',
                                  userSelect: 'none',
                                },
                              })}
                            >
                              {(() => {
                                if (!connected) {
                                  return (
                                    <div onClick={openConnectModal} type="button">
                                      BNB
                                    </div>
                                  );
                                }

                                return (
                                  <div onClick={openAccountModal} type="button">
                                    BNB
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        }}
                      </ConnectButton.Custom>
                    </li>
                    <li rel="wallettabs4">
                      <ConnectButton.Custom>
                        {({
                          account,
                          chain,
                          openAccountModal,
                          openChainModal,
                          openConnectModal,
                          authenticationStatus,
                          mounted,
                        }) => {
                          // Note: If your app doesn't use authentication, you
                          // can remove all 'authenticationStatus' checks
                          const ready = mounted && authenticationStatus !== 'loading';
                          const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                              authenticationStatus === 'authenticated');

                          return (
                            <div
                              {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                  opacity: 0,
                                  pointerEvents: 'none',
                                  userSelect: 'none',
                                },
                              })}
                            >
                              {(() => {
                                if (!connected) {
                                  return (
                                    <div onClick={openConnectModal} type="button">
                                      USDT
                                    </div>
                                  );
                                }

                                return (
                                  <div onClick={openAccountModal} type="button">
                                    USDT
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        }}
                      </ConnectButton.Custom>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row align-items-center pt-20">
              <div className="col-lg-12 col-md-12">
                <div className="tab_container">
                  <div id="wallettabs1" className="tab_content">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="POST"
                      id="dreamit-form"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="solana"
                              placeholder="Buy with SOL"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="dice"
                              placeholder="Receive $Dice"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Buy Now</a>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Claim Now</a>
                      </div>
                    </form>
                  </div>
                  <div id="wallettabs2" className="tab_content">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="POST"
                      id="dreamit-form"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="ethereum"
                              placeholder="Buy with ETH"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="dice"
                              placeholder="Receive $Dice"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Buy Now</a>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Claim Now</a>
                      </div>
                    </form>
                  </div>
                  <div id="wallettabs3" className="tab_content">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="POST"
                      id="dreamit-form"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="binance"
                              placeholder="Buy with BNB"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="dice"
                              placeholder="Receive $Dice"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Buy Now</a>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Claim Now</a>
                      </div>
                    </form>
                  </div>
                  <div id="wallettabs4" className="tab_content">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="POST"
                      id="dreamit-form"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="usdt"
                              placeholder="Buy with USDT"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_box mb-2">
                            <input
                              className="form-control"
                              inputMode="numeric"
                              name="dice"
                              placeholder="Receive $Dice"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Buy Now</a>
                      </div>
                      <div className="about-btn mt-20 col-lg-12" style={{ textAlign: 'center' }}>
                        <a href="#" style={{ width: '100%' }}>Claim Now</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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