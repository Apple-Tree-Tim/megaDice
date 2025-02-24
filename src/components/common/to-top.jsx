const ToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="scroll-area" onClick={scrollToTop} >
      <div className="top-wrap">
        <div className="go-top-btn-wraper">
          <div className="go-top go-top-button">
            <i className="fas fa-arrow-up"></i>
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToTop;