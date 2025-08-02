import Link from "next/link";
import { Fragment, useEffect } from "react";
import useWindowSize from "../useWindowSize";
import { stickyNav } from "../utils";
import MobileMenu from "./MobileMenu";

const Header = ({ header, singleMenus }) => {
  useEffect(() => {
    stickyNav({ singleMenus });
  }, []);
  const { width } = useWindowSize();
  useEffect(() => {
    const headers = document.querySelectorAll(".header-navigation");
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add("breakpoint-on");
      } else {
        header.classList.remove("breakpoint-on");
      }
      // toggle
      const toggleBtn = header.getElementsByClassName("navbar-toggler")[0],
        overlay = header.getElementsByClassName("nav-overlay")[0],
        menu = header.getElementsByClassName("nav-menu")[0];
      toggleBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        menu.classList.add("menu-on");
      });
      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        menu.classList.remove("menu-on");
      });
    });
  }, [width]);

  switch (header) {
  
    case 2:
      return <Header2 />;
    
  }
};
export default Header;



const Header2 = ({ singleMenus }) => (
  <header className="header-area">
    {/*=== Header Top-bar ===*/}
    <div className="topbar-two">
      <div className="container-1420">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="top-left">
              <span className="text">
                <i className="far fa-envelope" /> Email Us :{" "}
                <span>
                  <a href="mailto:info@visionexport.in">info@visionexport.in</a>
                </span>
              </span>
              <span className="text">
                <i className="far fa-clock" /> Working Hours :
                <span>Monday - Friday, 08 am - 05 pm</span>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3">
            <div className="top-right float-lg-right d-flex align-items-center">
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
                    <i className="fab fa-youtube" />
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
      </div>
    </div>
    {/*=== Header Navigation ===*/}
    <div className="header-navigation navigation-default">
      <div className="nav-overlay" />
      <div className="container-1420">
        {/*=== Primary Menu ===*/}
        <div className="primary-menu">
          {/*=== Site Branding ===*/}
          <div className="site-branding">
            <Link legacyBehavior href="/">
              <a className="brand-logo">
                <img src="assets/images/Vision-Logo.png" alt="Site Logo" />
              </a>
            </Link>
          </div>
          {/*=== Nav Inner Menu ===*/}
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img src="assets/images/Vision-Logo.png" alt="Site Logo" />
                  </a>
                </Link>
              </div>
              {singleMenus ? (
                <SingleMenu menus={singleMenus} />
              ) : (
                <Fragment>
                  <Menus />
                  <MobileMenu />
                </Fragment>
              )}
              <div className="menu-button pt-30">
                <Link legacyBehavior href="tel:+918049669046">
                <a className="main-btn btn-red">Call Now : +91 80 49669046</a>
              </Link>
              </div>
            </div>
          </div>
          {/*=== Nav right item ===*/}
          <div className="nav-right-item d-flex align-items-center">
            <div className="menu-button">
              <Link legacyBehavior href="tel:+918049669046">
                <a className="main-btn btn-red">Call Now : +91 80 49669046</a>
              </Link>
            </div>
            <div className="navbar-toggler">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);







const Menus = () => (
  <Fragment>
    <nav className="main-menu d-none d-xl-block">
      <ul>
        <li className="menu-item ">
          <a href="/" >
            Home
          </a>
          {/***<ul className="sub-menu">
            <li className="has-children">
              <a href="#">Multipage</a>
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/">
                    Business Consultant
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index">
                    Investment Solutions
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-3">
                    Digital Banking
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-4">
                    Business Advisor
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="index-5">
                    Marketing Agency
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">One Page</a>
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="onepage-index">
                    Business Consultant
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="onepage-index">
                    Investment Solutions
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="onepage-index-3">
                    Digital Banking
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="onepage-index-4">
                    Business Advisor
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="onepage-index-5">
                    Marketing Agency
                  </Link>
                </li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li className="menu-item ">
          <a href="about" >
            About
          </a>
        </li>
        <li className="menu-item ">
          <a href="service-details">Our Services</a>
          {/***<ul className="sub-menu">
            <li>
              <Link legacyBehavior href="services">
                Our Services
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="service-details">
                Service Details
              </Link>
            </li>
          </ul> */}
        </li>
        
        <li className="menu-item">
          <Link legacyBehavior href="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </Fragment>
);

const SingleMenu = ({ menus }) => {
  return (
    <Fragment>
      <nav className="main-menu">
        <ul>
          {menus.map((menu, i) => (
            <li className="menu-item" key={i}>
              <a href={`#${menu.href}`} className="page-scroll nav-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};
