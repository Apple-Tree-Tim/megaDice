import React from "react";

const Partner = () => {
  return (
    <div className="blog-section pt-20 pb-20">
      <div style={{ padding: "0px 120px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "50px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <img src="assets/images/crypto/binance.svg" alt="Binance" />
          <img src="assets/images/crypto/coinbase.svg" alt="Coinbase" />
          <img src="assets/images/crypto/bybit.svg" alt="Bybit" />
          <img src="assets/images/crypto/gate.svg" alt="Gate.io" />
          <img src="assets/images/crypto/kraken.svg" alt="Kraken" />
          <img src="assets/images/crypto/kucoin.svg" alt="KuCoin" />
          <img src="assets/images/crypto/mexc.svg" alt="MEXC" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
