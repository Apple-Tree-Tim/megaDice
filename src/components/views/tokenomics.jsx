import React from "react";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Tokenomics = () => {
  const data = {
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [
      {
        backgroundColor: ["#4DB866", "#EDB019", "#E36D23", "#F08A1E", "#39A2D1"],
        data: [55, 49, 44, 24, 15],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Our Tokenomics",
      },
    },
  };
  return (
    <div className="graph-section style-three pb-100">
      <div className="container">
        <div className="row upper14">
          <div className="col-lg-9">
            <div className="dreamit-section-title  pb-20">
              <div className="dreamit-section-main-title">
                <h1>1 CNL = 0.0013 BTC</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="right-side-graph-btn">
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="row upper15 pt-20">
          <div className="col-lg-6 col-md-12">
            <div className="single-chart-two">
              <Doughnut data={data} options={options} />
              <div className="row upper13">
                <div className="col-lg-6">
                  <div className="chart-menu">
                    <ul>
                      <li className="another1"><span>12%</span>Reserved Funding</li>
                      <li className="another2"><span>8%</span>Product Development</li>
                      <li className="another3"><span>40%</span>Bounty Campaign</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="chart-menu">
                    <ul>
                      <li className="another4"><span>40%</span>Bounty Campaign</li>
                      <li className="another5"><span>20%</span>Reserved Funding</li>
                      <li className="another6"><span>15%</span>Bounty Campaign</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="shape13">
                <img src="assets/images/shape2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="table-reponsive box">
              <div className="table-responsive-content">
                <h2>$DICE has total supply of <span>420,000,000</span></h2>
                <p>The Mega Dice token serves as the utility token of our platform, enabling users to access premium content, participate in community governance, and redeem exclusive rewards and benefits.</p>
              </div>
              <table id="example" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th id="all_token" style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }}>All Tokens</th>
                    <th id="gainers" style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }}>Gainers</th>
                    <th id="date" style={{ textAlign: "left", fontWeight: "bold", color: "#fff" }}>Total Supply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="single">
                    <td> <img src="assets/images/new/01.png" alt="" /> Bitcoin <span>BTC</span></td>
                    <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                    <td>21M</td>
                  </tr>
                  <tr className="one">
                    <td> <img src="assets/images/new/2.png" alt="" /> Ethereum <span>ETH</span></td>
                    <td><img src="assets/images/new/3.png" alt="" /> 0.23%</td>
                    <td>0.5M</td>
                  </tr>
                  <tr className="double">
                    <td> <img src="assets/images/new/4.png" alt="" /> Tether <span>THR</span></td>
                    <td><img src="assets/images/new/0.png" alt="" /> 6.96%</td>
                    <td>36M</td>
                  </tr>
                  <tr className="one">
                    <td> <img src="assets/images/new/5.png" alt="" /> Binance Coin <span>BNC</span></td>
                    <td><img src="assets/images/new/3.png" alt="" /> 1.90%</td>
                    <td>1.9M</td>
                  </tr>
                  <tr className="triple">
                    <td> <img src="assets/images/new/4.png" alt="" /> Solana <span>SOL</span></td>
                    <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                    <td>27M</td>
                  </tr>
                  <tr className="one">
                    <td> <img src="assets/images/new/5.png" alt="" /> Binance Coin <span>BNC</span></td>
                    <td><img src="assets/images/new/3.png" alt="" /> 1.90%</td>
                    <td>1.9M</td>
                  </tr>
                  <tr className="triple">
                    <td> <img src="assets/images/new/8.png" alt="" /> Dogecoin<span>DOGE</span></td>
                    <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                    <td>23M</td>
                  </tr>
                  <tr className="one">
                    <td> <img src="assets/images/new/01.png" alt="" /> Bitcoin <span>BTC</span></td>
                    <td><img src="assets/images/new/3.png" alt="" /> 5.43%</td>
                    <td>21M</td>
                  </tr>
                  <tr className="two">
                    <td> <img src="assets/images/new/2.png" alt="" /> Bitcoin <span>BTC</span></td>
                    <td><img src="assets/images/new/0.png" alt="" /> 5.43%</td>
                    <td>21M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;