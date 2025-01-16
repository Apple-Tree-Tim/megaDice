import React from "react";
import Marquee from "react-fast-marquee"; // Ensure you have this installed: `npm install react-fast-marquee`

const partners = [
  { id: 1, name: "Binance", image: "assets/images/crypto/binance.png" },
  { id: 2, name: "Coinbase", image: "assets/images/crypto/coinbase.png" },
  { id: 3, name: "Bybit", image: "assets/images/crypto/bybit.png" },
  { id: 4, name: "Gate.io", image: "assets/images/crypto/gate.png" },
  { id: 5, name: "Kraken", image: "assets/images/crypto/Kraken.png" },
  { id: 6, name: "KuCoin", image: "assets/images/crypto/kucoin.png" },
  { id: 7, name: "MEXC", image: "assets/images/crypto/mexc.png" },
  { id: 8, name: "Paribu", image: "assets/images/crypto/paribu.png" },
  { id: 9, name: "Okx", image: "assets/images/crypto/okx.png" },
];

const Partner = () => {
  return (
    <section className="partner-section pt-50 pb-50" style={{backgroundColor: "#161654"}}>
      <div className="marquee">
        {/* Marquee effect */}
        <Marquee gradient={false} speed={40}>
          {partners.map(({ id, name, image }) => (
            <div key={id} style={{ margin: "0px 40px" }}>
              <div className="single-partner-box">
                <img
                  src={image}
                  alt={name}
                  style={{ maxHeight: "50px" }}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partner;
