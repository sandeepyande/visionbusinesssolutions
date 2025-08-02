import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import {
  partnerSliderOne,
  teamSliderOne,
  testimonialSliderThree,
} from "../src/sliderProps";
const About = () => {
  return (
    <Layout header={2} footer={2} extraBodyCls="home-two">
      <PageBanner pageName={"About Us"} />
      {/*====== End Breadcrumb Section ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Vision Business Solutions </h2>
                </div>
                <p>
                  At Vision Business Solutions we are your trusted partners in the dynamic world of international trade.
                   Our mission is to empower businesses, both large and small, with the knowledge and strategies needed to excel in export and import operations.
                </p>
                
                {/**<ul className="check-style-one mb-30">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                  <li>Manage your business account</li>
                </ul> */}
                {/**<div className="about-button">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn filled-btn">Explore More Us</a>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Image Box ===*/}
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <img src="assets/images/about/about-3.jpg" alt="" />
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Fact Section ======*/}
      
      {/*====== End Fact Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-three_image-box p-r mb-50">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/img-2.jpg"
                      className="about-one-img wow fadeInUp"
                      alt="Mission Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/img-3.jpg"
                      className="about-two-img wow fadeInDown"
                      alt="Mission Image"
                    />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box mb-50">
                {/**<div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">What’s Our Plan</span>
                  <h2>Best Investment Solutions For Growth </h2>
                </div> */}

                <h4 className="mb-1">Our Story</h4>
                <p className="mb-30">Vision Business Solutions was founded by industry experts with a passion for helping businesses thrive in international markets.
                 Learn more about our journey and commitment to excellence.</p>
                <h4 className="mb-1">Our Team</h4>
                <p className="mb-30">Meet our team of experienced professionals who are dedicated to your success.
                 Our consultants and trainers bring a wealth of knowledge and practical experience to the table</p>
                <h4 className="mb-1">Why Choose us?</h4>
                <ul className="check-style-one mb-30">
                  <li>Industry Expertise : We know the export-import landscape inside out.</li>
                  <li>Tailored Solutions : Every business is unique; our solutions are too.</li>
                  <li>Global Reach : Our services extend to clients worldwide.</li>
                  <li>Commitment to Compliance : Stay on the right side of regulations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-section bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Common Heading ===*/}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h3>Contact us today for a consultation. We're here to help you succeed in global trade.</h3>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== Team Button ===*/}
              <div className="team-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn btn-white">Get in Touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start History Section ======*/}
      
      {/*====== Start History Section ======*/}
      {/*====== Start Partners Section ======*/}
      
      {/*====== End Partners Section ======*/}
      {/*====== Start Team Section ======*/}
     
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
      
      {/*====== End Feedback Section ======*/}
      {/*====== Start Newsletter Section ======*/}
    
    </Layout>
  );
};
export default About;
