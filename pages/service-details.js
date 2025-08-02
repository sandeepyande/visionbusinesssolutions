import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ServiceDetails = () => {
  const faqsData = [
    { title: "How to Getting Started your Business" },
    { title: "What is Business & Financial Relationship ?" },
    { title: "What is Importance of Co-working ?" },
    { title: "Useful Front-End Boilerplates And Starter Kits" },
    { title: "How to Getting Started your Business" },
    { title: "What is Business & Financial Relationship ?" },
    { title: "What is Importance of Co-working ?" },
    { title: "Useful Front-End Boilerplates And Starter Kits" },
    { title: "Inside The WordPress Toolbar" },
  ];
  const [active, setActive] = useState(`event-0`);
  return (
    <Layout header={2} footer={2} extraBodyCls="home-two">
      <PageBanner pageName={"Service Details"} />
      <section className="solution-section pt-120 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Solution Content Box ===*/}
              <div className="solution-one_content-box mr-lg-100 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInDown">
                  <span className="sub-title">Our Services</span>
                  <h2>Export Training</h2>
                  <p>Our comprehensive export training programs cover everything from the basics of 
                  export documentation to advanced international market strategies.
                   Equip your team with the skills they need for global success.</p>
                </div>
                {/**<div className="features-item-three animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <i className="far fa-bullseye-arrow" />
                  </div>
                  <div className="text">
                    <h4 className="title">Target Audience</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natusey voluptatem
                      accusantium doloremque
                    </p>
                  </div>
                </div> */}
                {/**<div className="features-item-three animate-hover-icon d-flex mb-20 wow fadeInUp">
                  <div className="icon">
                    <i className="far fa-shield-check" />
                  </div>
                  <div className="text">
                    <h4 className="title">Best Performance</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natusey voluptatem
                      accusantium doloremque
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Solution Image Box ===*/}
              <div className="solution-one_image-box p-r mb-50">
                <img
                  src="assets/images/gallery/solution-1.jpg"
                  className="solution-img-one wow fadeInRight"
                  alt=""
                />
               
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Solution Section ======*/}
      {/*====== Start Management Section ======*/}
      <section className="management-section pb-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Management Image Box ===*/}
              <div className="management-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/gallery/img-4.jpg"
                  alt="management image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Management content box ===*/}
              <div className="management-one_content-box content-box-gap mb-50 ml-lg-40 wow fadeInRight">
                <div className="section-title section-title-left mb-25">
                  
                  <h2>Import Training</h2>
                </div>
                <p>
                  Master the intricacies of importing, including customs procedures, regulations, 
                  and sourcing strategies.
                   Our import training ensures you're prepared for seamless global trade.
                </p>
                {/**<ul className="check-style-three mb-25">
                  <li>Professional Business Agency</li>
                  <li>Experience Team Members</li>
                </ul>
                <div className="management-button">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn filled-btn">Read More</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Management Section ======*/}
      {/*====== Start Service Section ======*/}
      
      {/*====== End Service Section ======*/}
      {/*====== Start Optimization Section ======*/}
      <section className="optimization-section pt-40 pb-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              {/*=== Optimization Content Box ===*/}
              <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  
                  <h2>Export-Import Consulting</h2>
                </div>
                <p>
                  Tap into our expertise for personalized export-import solutions.
                   We offer guidance on compliance, market research,
                   strategy development, and more, tailored to your business goals.
                </p>
                {/**<ul className="check-style-three">
                  <li>Business Solutions For Experts</li>
                  <li>Awards Winning Agency</li>
                  <li>Digital Banking Solutions</li>
                  <li>Finanacial Solutions</li>
                </ul>
                <div className="optimization-button">
                  <Link legacyBehavior href="/service-details">
                    <a className="main-btn btn-red">Explore More</a>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              {/*=== Optimization Image Box ===*/}
              <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                <img
                  src="assets/images/gallery/optimization-1.jpg"
                  className="optimization-img-one"
                  alt="optimization image"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Optimization Section ======*/}
     
      <section className="management-section pb-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Management Image Box ===*/}
              <div className="management-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/gallery/img-4.jpg"
                  alt="management image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Management content box ===*/}
              <div className="management-one_content-box content-box-gap mb-50 ml-lg-40 wow fadeInRight">
                <div className="section-title section-title-left mb-25">
                  
                  <h2>Compliance and Regulatory Guidance:</h2>
                </div>
                <p>
                  Navigate the complex world of trade regulations effortlessly. Our consultants keep you informed
                   and ensure your operations are compliant with international laws.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="optimization-section pt-40 pb-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              {/*=== Optimization Content Box ===*/}
              <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  
                  <h2>Export Import Logistics and Documentation</h2>
                </div>
                <p>
                  Hassle free end to end Logistics through our network of associates in all major ports and documentation processes. Our experts guide you through
                   trade finance options and ensure accurate, seamless experience.
                </p>
              
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              {/*=== Optimization Image Box ===*/}
              <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                <img
                  src="assets/images/gallery/optimization-1.jpg"
                  className="optimization-img-one"
                  alt="optimization image"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="management-section pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Management Image Box ===*/}
              <div className="management-one_img-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/gallery/img-4.jpg"
                  alt="management image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Management content box ===*/}
              <div className="management-one_content-box content-box-gap mb-50 ml-lg-40 wow fadeInRight">
                <div className="section-title section-title-left mb-25">
                  
                  <h2>Market Research and Entry Strategies</h2>
                </div>
                <p>
                  Identify lucrative markets and devise winning entry strategies.
                   We help you understand International Pricing, 
                  Trends, preferences, and competition to make informed decisions.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Faq Section ======*/}
      
      {/*====== End Faq Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-r pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {/*=== Map Content Box ===*/}
              <div className="map-one_content-box mb-50 wow fadeInDown">
                <div className="section-title section-title-left mb-50">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Ready to discuss your export-import goals? </h2>
                </div>
                <div className="map-box">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31112.847191843422!2d77.5429575!3d12.90091155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb91d9338ed%3A0x49ae7895a9e44e45!2sBengaluru%2C%20Karnataka%20560061!5e0!3m2!1sen!2sin!4v1754044213086!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== Contact Form Box ===*/}
              <div className="contact-two_form-box mb-50 wow fadeInUp">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
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
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required=""
                        />
                        <i className="fal fa-mobile-alt" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope-open-text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Subject"
                          name="subject"
                          required=""
                        />
                        <i className="far fa-engine-warning" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message........."
                          name="message"
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
                            I Agree with the service and terms and conditions
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-red">
                          Get Consultation
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
      {/*====== End Contact Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      
    </Layout>
  );
};
export default ServiceDetails;
