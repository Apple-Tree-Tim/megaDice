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
    labels: ["Token in Circulation", "B&D Account", "Marketing Account", "Airdrop Account", "Stake Account","Project Team", "Burn Account"],
    datasets: [
      {
        backgroundColor: ["#6CE5E8", "#7ED957", "#FFDE59", "#FF914D", "#31356E", "#F9EF0F", "#D90F0F"],
        data: [19.8, 1.4, 0.4, 0.4, 1.6, 0.4, 76],
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
    <div className="graph-section style-three pb-100" id="token">
      <div className="container">
        <div className="row upper14">
          <div className="col-lg-9">
            <div className="dreamit-section-title  pb-20">
              <div className="dreamit-section-main-title">
                <h1>1 AR+ = 1 MATIC</h1>
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
                      <li className="another1"><span>19.8%</span>Token in Circulation</li>
                      <li className="another3"><span>0.4%</span>Marketing Account</li>
                      <li className="another5"><span>1.6%</span>Stake Account</li>
                      <li className="another7"><span>76%</span>Burn Account</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="chart-menu">
                    <ul>
                      <li className="another2"><span>1.4%</span>B&D Account</li>
                      <li className="another4"><span>0.4%</span>Airdrop Account</li>
                      <li className="another6"><span>0.4%</span>Project Team</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="shape13">
                <img src="assets/images/shepa2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="table-reponsive box">
              <div className="table-responsive-content">
                <h2>$AR+ has total supply of <span>500,000,000,000</span></h2>
                <p>The AR PLUS token serves as the utility token of our platform, enabling users to access premium content, participate in community governance, and redeem exclusive rewards and benefits.</p>
              </div>
              <div>
                <img src="assets/images/main.png" width="100%" alt=""  style={{marginTop: "50px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;