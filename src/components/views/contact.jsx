import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    web: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, web, message } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:info@arplus.live?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AWebsite: ${web}%0D%0AMessage: ${message}`;
    
    // Open the mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-section style-four pt-110 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title two text-center pb-20">
              <div className="dreamit-section-main-title">
                <h1>Stay Update With Us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-20">
          <div className="col-lg-4 col-md-6">
            <div className="single-contact-icon-box d-flex align-items-center">
              <div className="contact-icon">
                <i className="flaticon-message"></i>
              </div>
              <div className="contact-content-text">
                <p>info@arplus.live</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-contact-icon-box d-flex align-items-center">
              <div className="contact-icon">
                <i className="flaticon-tv"></i>
              </div>
              <div className="contact-content-text">
                <p>View our Video</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="https://t.me/ARPLUSTOKEN" target="_blank" rel="noopener noreferrer" className="single-contact-icon-box d-flex align-items-center">
              <div className="contact-icon">
                <i className="flaticon-paper-plane"></i>
              </div>
              <div className="contact-content-text">
                <p>Join Us on Telegram</p>
              </div>
            </a>
          </div>
        </div>
        <div className="row upper12 align-items-center pt-60">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 col-md-12 p-0">
            <div className="contact_from upper10">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form_box mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_box mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_box mb-1">
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_box mb-1">
                      <input
                        className="form-control"
                        type="text"
                        name="web"
                        placeholder="Website"
                        value={formData.web}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_box">
                      <textarea
                        className="form-control"
                        name="message"
                        cols="10"
                        rows="5"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="quote_btn text_center mt-15">
                    <button className="btn" type="submit">SUBMIT MESSAGE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
