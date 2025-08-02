import Link from "next/link";
const Footer = ({ footer }) => {
  switch (footer) {
    
    case 2:
      return <Footer2 />;
    

    default:
      return <Footer2 />;
  }
};
export default Footer;

const Footer2 = () => (
  <footer className="footer-two text-white p-r z-1">
    <div className="shape shape-one">
      <span />
    </div>
    <div className="shape shape-two">
      <span />
    </div>
    <div className="shape shape-three">
      <span />
    </div>
    <div className="shape shape-four">
      <span />
    </div>
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/footer-logo.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Ready to discuss your export-import goals? 
                  Contact us today for a consultation.
                   We're here to help you succeed in global trade.
                </p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Services</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="about">About Us</a>
                  </li>
                  <li>
                    <a href="service-details">Our Services</a>
                  </li>
                  <li>
                    <a href="contact">Contact Us</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
                <h5 className="title">Main Office</h5>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>No.12, 1st floor, 1st Phase, Jayanagar HBCS Layout, Uttarahalli, Bangalore, INDIA 560061</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
           <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
               
                <h5 className="title">Contact Details</h5>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                   <i className="far fa-phone" />
                  </div>
                  <div className="text">
                    <p>+91 80 49669046 <br/> +91 98458 82560</p>
                   
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>info@visionexport.in</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright border-top-white-op-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-text text-center">
              <p>@ 2025 visionexport.in. All Rights reserved Designed & Hosted By <a href="https://webuniversals.co.in/"> Web Universals </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);






