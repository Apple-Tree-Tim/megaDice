import React, {useState} from "react"
import Navbar from "../components/common/navbar";
import Home from "../components/views/home";
import About from "../components/views/about";
import Roadmap from "../components/views/roadmap";
import Team from "../components/views/team";
import Faqs from "../components/views/faqs";
import Contact from "../components/views/contact";
import Footer from "../components/common/footer";
import Partner from "../components/views/partner";
import SearchPopup from "../components/common/search-popup";
import SidebarCart from "../components/common/sidebar-cart";
import Timeline from "../components/views/timeline";
import ToTop from "../components/common/to-top";
import Feature from "../components/views/feature";
import Purchaseway from "../components/views/purchaseway";
import Tokenomics from "../components/views/tokenomics";

function Landing() {
  const [stage, setStage] = useState(1);

  return (
    <div>
      <Navbar />
      <Home setStage={setStage} stage={stage} />
      <About />
      <Partner />
      <Timeline />
      <Feature />
      <Purchaseway />
      <Tokenomics stage={stage} />
      <Team />
      <Roadmap />
      <Faqs />
      <Contact />
      <Footer />
      <SearchPopup />
      <SidebarCart />
      <ToTop />
    </div>
  )
}

export default Landing;