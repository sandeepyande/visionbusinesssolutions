import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Contact = () => {
  return (
    <Layout header={2} footer={2} extraBodyCls="home-two">
      <PageBanner pageName={"Contact Us"} />
      <section className="contact-information-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Information Image Box ===*/}
              <div className="information-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/contact/img-1.jpg"
                  alt="Contact Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Information Content Box ===*/}
              <div className="information-one_content-box ml-lg-40">
                <div className="section-title section-title-left mb-10 wow fadeInDown">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Ready to discuss your export-import goals? </h2>
                  <p>Contact us today for a consultation.<br/> We're here to help you succeed in global trade.</p>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Loaction</h3>
                    <p>No.12, 1st floor, 1st Phase, Jayanagar HBCS Layout, Uttarahalli, Bangalore, INDIA 560061</p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Email Us</h3>
                    <p>
                      <a href="mailto:info@visionexport.in">
                        info@visionexport.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="single-info-item animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="Icon" />
                  </div>
                  <div className="info">
                    <h3 className="title">Phone Number</h3>
                    <p>
                      <a href="tel:+918049669046">+91 80 49669046</a>,
                      <a href="tel:+919845882560">+91 98458 82560</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Information Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      <section className="contact-section pt-20 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== Contact Content Box ===*/}
              <div className="contact-one_content-box mb-50 wow fadeInLeft">
                <div className="section-title section-title-left                                                                                                    ">
                  <span className="sub-title">Contact Us</span>
                  <h2>Have any Question On Mind! Say Hi</h2>
                </div>
                
                <div className="social-box">
                  <h3 className="title">Follow Us</h3>
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
                    <li>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== Contact Form Box ===*/}
              <div className="contact-one_form-box ml-lg-40 mb-50 wow fadeInRight">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name"
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone"
                          name="phone"
                          required=""
                        />
                        <i className="far fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Subject"
                          name="subject"
                          required=""
                        />
                        <i className="far fa-pencil" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          name="message"
                          placeholder="Write your Message"
                          defaultValue={""}
                        />
                        <i className="far fa-pencil" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_checkbox">
                        <input type="checkbox" name="checkbox" id="check1" />
                        <label htmlFor="check1">
                          <span>
                            I agree that my data is collected and stored.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-red">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-page-map wow fadeInUp">
        {/*=== Map Box ===*/}
        <div className="map-box">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31112.847191843422!2d77.5429575!3d12.90091155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb91d9338ed%3A0x49ae7895a9e44e45!2sBengaluru%2C%20Karnataka%20560061!5e0!3m2!1sen!2sin!4v1754044213086!5m2!1sen!2sin" ></iframe>
        </div>
      </section>
      {/*====== End Contact Map Section ======*/}
      {/*====== Start Contact Section ======*/}
      
      {/*====== End Contact Section ======*/}
      {/*====== Start Newsletter Section ======*/}
    
    </Layout>
  );
};
export default Contact;
