import React from "react";

const Faqs = () => {
  return (
    <div className="faq-section style-five pt-100 pb-100" style={{ minHeight: "1700px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title two text-center pb-20">
              <h1 className="dreamit-section-main-title">FREQUENTLY ASKED QUESTIONS</h1>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-lg-12">
            <div className="tab_container">
              <ul className="accordion">
                {faqData.map((faq, index) => (
                  <li key={index}>
                    <a>{faq.question}</a>
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is AR+ Token?",
    answer: "AR+ Token is a cryptocurrency that forms the backbone of our platform's virtual economy. Users can utilize AR+ Token to participate in events, purchase digital products, and access other services on the platform.",
  },
  {
    question: "How Can I Buy AR+ Token?",
    answer: "You can purchase AR+ Token through official sales events on our website or from select cryptocurrency exchanges.",
  },
  {
    question: "Which Blockchain Does AR+ Token Operate On?",
    answer: "AR+ Token operates on the Polygon network, which offers low transaction fees and fast transfers.",
  },
  {
    question: "What Are the Use Cases for AR+ Token?",
    answer: `
      • Participation in virtual events <br />
      • Purchasing digital products and services <br />
      • Showcasing digital art <br />
      • Accessing exclusive areas and events <br />
      • Platform-based games and rewards
    `,
  },
  {
    question: "How Is the Price of AR+ Token Determined?",
    answer: "The initial sale price will be $0.50, and the second sale price will be $0.75. Afterward, the token will be listed on exchanges at $1.00 and will be subject to market conditions.",
  },
  {
    question: "How Can I Store AR+ Token?",
    answer: "You can store AR+ Token in a cryptocurrency wallet compatible with the Polygon network, ensuring you have control over your private keys.",
  },
  {
    question: "How Can I Use AR+ Token?",
    answer: "You can spend your tokens on services offered by the platform, transfer them to other users, or trade them on exchanges.",
  },
  {
    question: "What Is the Economic Model of AR+ Token?",
    answer: "The total supply is 500 billion tokens, with 99 billion tokens in circulation. Additionally, 13 billion tokens will be burned annually.",
  },
  {
    question: "Is AR+ Token Secure?",
    answer: "Yes, AR+ Token benefits from the security features of blockchain technology as it operates on the Polygon network.",
  },
  {
    question: "Can I Earn Rewards on the Platform?",
    answer: "Yes, you can earn rewards through your activities on the platform, which will be distributed as AR+ Tokens.",
  },
  {
    question: "Which Cryptocurrencies Can I Trade AR+ Token With?",
    answer: "You can trade AR+ Token primarily with MATIC, USDT, and other cryptocurrencies supported on the Polygon network.",
  },
  {
    question: "How Will the Taxes Collected from AR+ Token Transactions Be Used?",
    answer: "98% of the collected taxes will be used for buybacks to maintain and increase the value of AR+ Token. The remaining 2% will be allocated to social responsibility projects.",
  },
  {
    question: "On Which Exchanges Will AR+ Token Be Listed?",
    answer: "After the pre-sale, AR+ Token will aim to list on exchanges. However, the success of the listing depends on the level of community participation during the pre-sale, as exchanges prioritize projects with high engagement. Our primary goal is to list on a centralized exchange (CEX). If a CEX listing is not achieved, we will ensure listing on a decentralized exchange (DEX) as a minimum. Future listings will follow our roadmap accordingly.",
  },
];

export default Faqs;
