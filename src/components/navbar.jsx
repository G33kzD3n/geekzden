import React, { useEffect } from "react";
import $ from "jquery";
const Navbar = () => {
  useEffect(() => {
    if ($(".menu-trigger").length) {
      $(".menu-trigger").on("click", function () {
        $(this).toggleClass("active");
        $(".header-area .nav").slideToggle(200);
      });
    }
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var box = $(".header-text").height();
      var header = $("header").height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });

    // Window Resize Mobile Menu Fix
    mobileNav();

    $('a[href^="#welcome"]').addClass("active");

    //smoothscroll
    $(".menu-item").on("click", function (e) {
      e.preventDefault();
      var athis = this;
      var target = this.hash,
        menu = target;
      var $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(".menu-item").removeClass("active");
            $(athis).addClass("active");
          }
        );

      $(".main-nav > .nav").css("display", "none");
      $(".menu-trigger").removeClass("active");
    });

    $(window).scroll(function (event) {
      var scrollPos = $(document).scrollTop() + 80;

      if (scrollPos === 0) {
        $('a[href^="#welcome"]').addClass("active");
        return;
      }
      $(".menu-item")
        .not('[href="#none"]')
        .not('[href="#dropdown"]')
        .each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));

          if (
            refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos
          ) {
            $(".menu-item").removeClass("active");
            currLink.addClass("active");
          } else {
            currLink.removeClass("active");
          }
        });
    });

    // Window Resize Mobile Menu Fix
    $(window).on("resize", function () {
      mobileNav();
    });

    // Window Resize Mobile Menu Fix
    function mobileNav() {
      var width = $(window).width();
      $(".submenu").on("click", function () {
        if (width < 992) {
          $(".submenu ul").removeClass("active");
          $(this).find("ul").toggleClass("active");
        }
      });
    }

    // Menu elevator animation
    $("a[href*=\\#dropdown]:not([href=\\#none])").on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        window.location.hostname == this.hostname
      ) {
        var targetHash = this.hash;
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          var width = $(window).width();
          if (width < 991) {
            $(".menu-trigger").removeClass("active");
            $(".header-area .nav").slideUp(200);
          }
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            700,
            "swing",
            function () {
              window.location.hash = targetHash;
            }
          );
          return false;
        }
      }
    });
  }, []);

  return (
    <header className="header-area header-sticky">
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
                  <a href="#dropdown">Drop Down</a>
                  <ul>
                    <li>
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
                    </li>
                    <li>
                      <a href="#none" className="menu-item">
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
              <a href="#none" className="menu-trigger">
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
