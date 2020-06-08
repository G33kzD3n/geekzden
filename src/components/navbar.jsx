import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        scrollPosition < 626
          ? "header-area header-sticky"
          : "header-area header-sticky background-header"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo">
                G33kz
              </a>
              {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#welcome" className="menu-item">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about" className="menu-item">
                    About
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#testimonials" className="menu-item">
                    Testimonials
                  </a>
                </li>
                <li className="submenu">
                  <a href="# ">Drop Down</a>
                  <ul>
                    <li>
                      <a href="# " className="menu-item">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="# " className="menu-item">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="# " className="menu-item">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="# " className="menu-item">
                        Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact-us" className="menu-item">
                    Contact Us
                  </a>
                </li>
              </ul>
              <a href="# " className="menu-trigger">
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
