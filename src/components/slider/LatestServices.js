import Link from "next/link";
import Slider from "react-slick";
import { serviceSliderOne } from "../../sliderProps";
const LatestServices = () => {
  return (
    <Slider {...serviceSliderOne} className="service-slider-one">
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-1.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="/">
                  <a>Export<br/> Training</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="/">
                  <a>Export<br/> Training</a>
                </Link>
              </h3>
            </div>
            <p>
              Our comprehensive export training programs 
            </p>
            <Link legacyBehavior href="/">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-2.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
             
              <h3 className="title">
                <Link legacyBehavior href="/service-details">
                  <a>Import <br/>Training</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Import<br/> Training</a>
                </Link>
              </h3>
            </div>
            <p>
             Master the intricacies of importing, including customs 
            </p>
            <Link legacyBehavior href="service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-3.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Export-Import Consulting</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Export-Import Consulting</a>
                </Link>
              </h3>
            </div>
            <p>
            Tap into our expertise for personalized export-import solutions. 
            </p>
            <Link legacyBehavior href="service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-2.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
             
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Compliance and Regulatory </a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Compliance and Regulatory </a>
                </Link>
              </h3>
            </div>
            <p>
             Navigate the complex world of trade regulations effortlessly. 
            </p>
            <Link legacyBehavior href="service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
       {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-2.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
             
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Market Research & Entry Strategies</a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Market Research & Entry Strategies </a>
                </Link>
              </h3>
            </div>
            <p>
             Identify lucrative markets and devise winning entry strategies.  
            </p>
            <Link legacyBehavior href="service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
       {/*=== Service Item ===*/}
      <div className="service-item wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/service/img-2.jpg" alt="service image" />
        </div>
        <div className="service-content">
          <div className="text">
            <div className="title-icon d-flex">
             
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Export Import Logistics </a>
                </Link>
              </h3>
            </div>
          </div>
          <div className="hover-text text-white">
            <div className="title-icon d-flex">
              
              <h3 className="title">
                <Link legacyBehavior href="service-details">
                  <a>Export Import Logistics </a>
                </Link>
              </h3>
            </div>
            <p>
            Hassle free end to end Logistics through our network of associates  
            </p>
            <Link legacyBehavior href="service-details">
              <a className="icon-btn">
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default LatestServices;
