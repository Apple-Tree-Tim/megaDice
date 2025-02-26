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
import Timeline from "../components/views/timeline";
import ToTop from "../components/common/to-top";
import Feature from "../components/views/feature";
import Purchaseway from "../components/views/purchaseway";
import Tokenomics from "../components/views/tokenomics";

function Landing() {

  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Partner />
      <Timeline />
      <Feature />
      <Purchaseway />
      <Tokenomics/>
      <Team />
      <Roadmap />
      <Faqs />
      <Contact />
      <Footer />
      <ToTop />
    </div>
  )
}

export default Landing;