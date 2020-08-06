import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import { Link as HyperLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [openNav, setOpenNav] = useState("menu-trigger");
  const [subMenu, setSubMenu] = useState(null);
  const mobileNavOpen = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNav = () => {
    if (openNav === "menu-trigger") {
      setOpenNav("menu-trigger active");
    } else {
      setOpenNav("menu-trigger");
    }
    $(".header-area .nav").slideToggle(200);
  };

  const closeNavBar = () => {
    setOpenNav("menu-trigger");
    mobileNavOpen.current.style.display = "none";
  };

  const handleDropDown = () => {
    if (subMenu === null) {
      setSubMenu("active");
    } else {
      setSubMenu(null);
    }
  };
  return (
    <header
      className={
        scrollPosition < 646
          ? "header-area header-sticky"
          : "header-area header-sticky background-header"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <Link to={"/"} className="logo">
                Geekz Den
              </Link>
              {/* <a href="#" className="logo"> */}
              {/* Geekz Den */}
              {/* </a> */}
              {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
              <ul className="nav" ref={mobileNavOpen}>
                <li className="scroll-to-section">
                  <HyperLink
                    onClick={closeNavBar}
                    style={{ cursor: "pointer" }}
                    className="menu-item"
                    activeClass="active"
                    to="welcome"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // isDynamic={true}
                  >
                    Home
                  </HyperLink>
                  {/* <a href="#welcome" className="menu-item">
                    Home
                  </a> */}
                </li>
                <li className="scroll-to-section">
                  <HyperLink
                    onClick={closeNavBar}
                    style={{ cursor: "pointer" }}
                    className="menu-item"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // isDynamic={true}
                  >
                    Services
                  </HyperLink>
                  {/* <a href="#about" className="menu-item">
                    About
                  </a> */}
                </li>
                <li className="scroll-to-section">
                  <HyperLink
                    onClick={closeNavBar}
                    style={{ cursor: "pointer" }}
                    className="menu-item"
                    activeClass="active"
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // isDynamic={true}
                  >
                    Team
                  </HyperLink>
                  {/* <a href="#testimonials" className="menu-item">
                    Testimonials
                  </a> */}
                </li>
                <li
                  className="submenu"
                  style={{ borderWidth: 1, borderColor: "#eee" }}
                >
                  <a href="#dropdown" onClick={handleDropDown}>
                    More
                  </a>

                  <ul className={subMenu}>
                    {/* <li>
                      <a href="#none" className="menu-item">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#none" className="menu-item">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#none" className="menu-item">
                        FAQ's
                      </a>
                    </li> */}
                    <li>
                      <Link to={"/blog"} className="menu-item">
                        Blog
                      </Link>
                      <Link to={"/career"} className="menu-item">
                        Career
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <HyperLink
                    onClick={closeNavBar}
                    style={{ cursor: "pointer" }}
                    className="menu-item"
                    activeClass="active"
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    // isDynamic={true}
                  >
                    Contact Us
                  </HyperLink>
                  {/* <a href="#contact-us" className="menu-item">
                    Contact Us
                  </a> */}
                </li>
              </ul>
              <a href="#none" className={openNav} onClick={handleMobileNav}>
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
