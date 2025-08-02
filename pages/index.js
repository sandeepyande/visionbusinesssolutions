import Link from "next/link";
import Slider from "react-slick";
import ProgressBar from "../src/components/ProgressBar";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import {
  heroSliderOne,
  projectsSliderTwo,
  testimonialSliderThree,
} from "../src/sliderProps";
const Index = () => {
  return (
    <Layout header={2} footer={2} extraBodyCls="home-two">
      {/*====== Start Hero Section ======*/}
      <section className="banner-two">
        {/*=== Hero Slider ===*/}
        <Slider {...heroSliderOne} className="hero-slider-one">
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-two-slider-1.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    />
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                     Welcome to Vision Business Solutions <br/> Your Gateway to International Markets
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".6s">
                      One stop-shop for all your Export Import needs
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <Link legacyBehavior href="tel:+918049669046">
                        <a className="main-btn btn-white">Call Now : +91 80 49669046</a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn filled-btn filled-white">
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-two-slider-2.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    />
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                     Welcome to Vision Business Solutions <br/> Your Gateway to International Markets
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".6s">
                      Market Intelligence
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                       <Link legacyBehavior href="tel:+918049669046">
                        <a className="main-btn btn-white">Call Now : +91 80 49669046</a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn filled-btn filled-white">
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-two-slider-3.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    />
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Welcome to Vision Business Solutions <br/> Your Gateway to International Markets
                    </span>
                    <h1 data-animation="fadeInDown" data-delay=".6s">
                     Establish connect with overseas Buyers
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <Link legacyBehavior href="tel:+918049669046">
                        <a className="main-btn btn-white">Call Now : +91 80 49669046</a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn filled-btn filled-white">
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features  Section ======*/}
      <section className="features-section pt-80 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Vision Business Solutions </span>
                <h2>Your Gateway to International Markets</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span className="number">01.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">One stop-shop for all your Export Import needs</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="number">02.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Market Intelligence</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <span className="number">03.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">Establish connect with overseas Buyers</h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span className="number">04.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    Compliances and Registrations
                  </h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span className="number">05.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                   Sourcing Specialists
                  </h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Item ===*/}
              <div
                className="features-item-two mb-30 d-flex align-items-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span className="number">06.</span>
                <div className="icon">
                  <i className="flaticon-pie-chart-1" />
                </div>
                <div className="text">
                  <h3 className="title">
                    Export Logistics planning
                  </h3>
                </div>
                <a href="#" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
           <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mt-40 wow fadeInDown">
                <h4>We promote Natural and Sustainable products sourced from women Entreprenuers</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-five_image-box mb-30">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/about-4.jpg"
                      className="about-img-one mb-20 wow fadeInUp"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/about-5.jpg"
                      className="about-img-two mb-20 wow fadeInDown"
                      alt=""
                    />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-two_content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Vision Business Solutions  </h2>
                </div>
                <p>
                 At Vision Business Solutions we are your trusted partners in the dynamic world of
                international trade. Our mission is to empower businesses, both large and small, 
                 with the knowledge and strategies needed to excel in export and import operations.{" "}
                </p>
                {/****<ul className="check-style-two">
                  <li>Portfolio Diversification</li>
                  <li>Capital Protection</li>
                  <li>Volatility Protection</li>
                  <li>Inflation Protection</li>
                </ul> */}
                {/****<div className="avatar-box d-flex">
                  <div className="thumb">
                    <img src="assets/images/about/avatar-1.jpg" alt="" />
                  </div>
                  <div className="text">
                    <img src="assets/images/about/sign.png" alt="" />
                    <h6>CEO &amp; Founder</h6>
                  </div>
                </div> */}
                <div className="cta-button  wow fadeInRight">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Utility Section ======*/}
      <section className="utility-section">
        <div className="container">
          {/*====== CTA Section ======*/}
          <div className="cta-section-two pt-50 pb-30">
            <div className="row align-items-center">
              <div className="col-lg-7">
                {/*=== Common Heading ===*/}
                <div className="section-title text-white wow fadeInLeft">
                  <h3>
                   Ready to discuss your export-import goals? <span>Contact us today for a consultation</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-5">
                {/*=== CTA Button ===*/}
                <div className="cta-button float-lg-right wow fadeInRight">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">Get In Touch</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*====== Service Section ======*/}
          <div className="service-section-two pt-125 pb-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  {/*=== Common Heading ===*/}
                  <div className="section-title section-title-white text-center mb-60 wow fadeInDown">
                    <span className="sub-title">Our Services</span>
                    <h2>Vision Business Solutions </h2>
                  </div>
                </div>
              </div>
              {/*=== Service Slider ===*/}
              <LatestServices />
            </div>
          </div>
          {/*====== Fact Section ======*/}
          <div className="fact-section-two pt-50 pb-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Counter Item ===*/}
                  <div
                    className="single-counter-item-two mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="text d-flex align-items-center">
                      <h2 className="number">
                        <span className="count">358</span>+
                      </h2>
                      <h5>Product Delivered in Last 4 Years</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Counter Item ===*/}
                  <div
                    className="single-counter-item-two mb-40 wow fadeInUp"
                    data-wow-delay=".25s"
                  >
                    <div className="text d-flex align-items-center">
                      <h2 className="number">
                        <span className="count">536</span>+
                      </h2>
                      <h5>Happy Customers Who Trusted</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Counter Item ===*/}
                  <div
                    className="single-counter-item-two mb-40 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="text d-flex align-items-center">
                      <h2 className="number">
                        <span className="count">963</span>+
                      </h2>
                      <h5>Session Completed</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Utility Section ======*/}
      {/*====== Start Advantage Section ======*/}
      <section
        className="advantage-section bg_cover pt-285 pb-130"
        style={{ backgroundImage: "url(assets/images/bg/advantage-bg.jpg)" }}
      >
        <div className="container">
          {/*====== Skill Section ======*/}
          <div className="skill-area">
            <div className="row align-item-middle">
              <div className="col-lg-3">
                {/*=== Common Heading ===*/}
                <div className="section-title section-title-left mb-50 wow fadeInLeft">
                  <span className="sub-title">Vision Business Solutions </span>
                  <h3>Why Choose us?</h3>
                </div>
              </div>
              <div className="col-lg-9">
                {/*=== Single Content Box ===*/}
                <div className="skill-content-box wow fadeInRight">
                <div className="row">
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={95} color="#0dceb5" />
                        <div className="text">
                          <h3 className="title">Industry Expertise</h3>
                          <p>We know the export-import landscape inside out.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={89} color="#0dceb5" />
                        <div className="text">
                          <h3 className="title">Tailored Solutions</h3>
                          <p>Every business is unique; our solutions are too.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={95} color="#0dceb5" />
                        <div className="text">
                          <h3 className="title">	Global Reach</h3>
                          <p>Our services extend to clients worldwide.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={85} color="#0dceb5" />
                        <div className="text">
                          <h3 className="title">Commitment to Compliance</h3>
                          <p>Stay on the right side of regulations.</p>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          {/*====== FAQ Section ======*/}
          
        </div>
      </section>
      {/*====== Start Advantage Section ======*/}
      {/*====== Start Projects Section ======*/}
      
      {/*====== End Projects Section ======*/}
      {/*====== Start Team Section ======*/}
     
      {/*====== End Team Section ======*/}
      {/*====== Start Feedback Section ======*/}
      <section className="testimonial-section-two pb-130">
        <div className="container">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-wrapper-two dark-black-bg wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title section-title-white section-title-left border-bottom-1 mb-40 pb-20">
                  <span className="sub-title">Clients Testtimonials</span>
                  <h2>What’s Our Customer Say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three"
                >
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-2.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-3.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-lg-2">
                <div className="testimonial-dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Feedback Section ======*/}
      {/*====== Start Blog Section ======*/}
     
      {/*====== End Blog Section ======*/}
      {/*====== Start Partners Section ======*/}
      
      {/*====== End Partners Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-r pt-60 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {/*=== Map Content Box ===*/}
              <div className="map-one_content-box mb-50 wow fadeInDown">
                
                 <img
                      src="assets/images/features/img-2.jpg"
                      className=" mb-20 wow fadeInUp"
                      alt=""
                    />
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
                        <label htmlFo r="check1">
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
export default Index;