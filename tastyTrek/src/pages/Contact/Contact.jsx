import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="py-5 about-section green-theme">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="about-wrapper p-0 overflow-hidden">

              {/* Hero Header */}
              <div className="about-hero text-center p-5">
                <h1 className="display-5 fw-bold mb-3">
                  <span className="about-icon">🍽️</span><br />
                  About TastyTrek
                </h1>
                <p className="lead mb-4">
                  Discover authentic culinary adventures with our passionate food community
                </p>
                <div className="divider mx-auto"></div>
              </div>

              {/* Features */}
              <div className="features-row p-4 p-lg-5">
                <div className="row g-4 text-center">

                  <div className="col-md-4">
                    <div className="feature-icon-wrapper">
                      <span className="feature-icon">🔍</span>
                    </div>
                    <h4 className="my-3">Discover</h4>
                    <p className="feature-desc">
                      Unearth hidden food gems and local favorites
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="feature-icon-wrapper">
                      <span className="feature-icon">🌟</span>
                    </div>
                    <h4 className="my-3">Authentic</h4>
                    <p className="feature-desc">
                      Verified reviews from real food enthusiasts
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="feature-icon-wrapper">
                      <span className="feature-icon">💳</span>
                    </div>
                    <h4 className="my-3">Secure Payments</h4>
                    <p className="feature-desc">
                      UPI, Cards, Razorpay & Stripe options.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="feature-icon-wrapper">
                      <span className="feature-icon">🍽️</span>
                    </div>
                    <h4 className="my-3">Wide Variety</h4>
                    <p className="feature-desc">
                      Menus from top restaurants and home kitchens.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="feature-icon-wrapper">
                      <span className="feature-icon">👨‍🍳</span>
                    </div>
                    <h4 className="my-3">Top Chefs</h4>
                    <p className="feature-desc">
                      Food by verified and experienced chefs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="contact-section p-4 p-lg-5">
                <h2 className="text-center mb-5">Connect With Us</h2>

                <div className="contact-methods row g-4">
                  <div className="col-md-6 col-lg-3 text-center">
                    <a href="mailto:janisar392@gmail.com" className="contact-card-link">
                      <div className="contact-card p-3">
                        <i className="bi bi-envelope-fill contact-icon"></i>
                        <h5 className="mt-3">Email</h5>
                        <p>janisar392@gmail.com</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center">
                    <a href="tel:+919608456392" className="contact-card-link">
                      <div className="contact-card p-3">
                        <i className="bi bi-telephone-fill contact-icon"></i>
                        <h5 className="mt-3">Phone</h5>
                        <p>+91 9608456392</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center">
                    <div className="contact-card p-3">
                      <i className="bi bi-geo-alt-fill contact-icon"></i>
                      <h5 className="mt-3">Location</h5>
                      <p>Knowledge Park 2, Greater Noida 201310</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 text-center">
                    <a href="https://portfolio-janisar.netlify.app/" target="_blank" rel="noreferrer" className="contact-card-link">
                      <div className="contact-card p-3">
                        <i className="bi bi-globe contact-icon"></i>
                        <h5 className="mt-3">Website</h5>
                        <p>portfolio-janisar.netlify.app</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="social-links text-center mt-5">
                  <a href="https://www.linkedin.com/in/janisar392/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.youtube.com/@JanisarAkhtar-projects" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="https://portfolio-janisar.netlify.app/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="bi bi-person-badge"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
