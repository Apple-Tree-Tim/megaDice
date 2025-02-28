const MobileNavbar = () => {
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
      <div className="mobile-menu">
        <nav className="itsoft_menu">
          <ul className="nav_scroll">
            <li><a href="#home">Home</a></li>
            <li><a href="#purchaseway">How To Buy</a></li>
            <li><a href="#roadmap">Road Map</a></li>
            <li><a href="#faqs">FaQs</a>
            </li>
            <li><a href="#team">team</a>
            </li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;