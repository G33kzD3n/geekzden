import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Fade } from "react-reveal";

const Testimonial = () => {
  return (
    <Fragment>
      <div className="right-image-decor"></div>
      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  Our <em>Team</em>
                </h2>
              </div>
            </div>
            <Fade left>
              <div
                className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                {/* <div className="owl-carousel owl-theme"> */}
                <OwlCarousel
                  items={1}
                  // items={2}
                  className="owl-carousel"
                  loop
                  autoplay={true}
                  nav
                  margin={10}
                >
                  <div className="item service-item">
                    <div className="author">
                      <i>
                        <img
                          src="assets/nadeem.jpeg"
                          className="image-bor"
                          alt="Author One"
                        />
                      </i>
                    </div>
                    <div className="testimonial-content">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4>Nadeem Hilal</h4>
                      {/* <p>
                        “Nullam hendrerit, elit a semper pharetra, ipsum nibh
                        tristique tortor, in tempus urna elit in mauris.”
                      </p> */}
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <div className="item service-item">
                    <div className="author">
                      <i>
                        <img
                          src="assets/basit.jpeg"
                          alt="Second Author"
                          className="image-bor"
                        />
                      </i>
                    </div>
                    <div className="testimonial-content">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4>Basit Mir</h4>
                      {/* <p>
                        “Morbi non mi luctus felis molestie scelerisque. In ac
                        libero viverra, placerat est interdum, rhoncus leo.”
                      </p> */}
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <div className="item service-item">
                    <div className="author">
                      <i>
                        <img
                          src="assets/testimonial-author-1.png"
                          alt="Author Third"
                          className="image-bor"
                        />
                      </i>
                    </div>
                    <div className="testimonial-content">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4>Owais Drabu</h4>
                      {/* <p>
                        “Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                        justo. Donec quam dolor, congue a fringilla sed, maximus
                        et urna.”
                      </p> */}
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <div className="item service-item">
                    <div className="author">
                      <i>
                        <img
                          src="assets/sami.jpg"
                          alt="Author Third"
                          className="image-bor"
                        />
                      </i>
                    </div>
                    <div className="testimonial-content">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4>Sami Ullah</h4>
                      {/* <p>
                        “Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                        justo. Donec quam dolor, congue a fringilla sed, maximus
                        et urna.”
                      </p> */}
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <div className="item service-item">
                    <div className="author">
                      <i>
                        <img
                          src="assets/sajid.jpeg"
                          alt="Fourth Author"
                          className="image-bor"
                        />
                      </i>
                    </div>
                    <div className="testimonial-content">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4>Sajid Sajad</h4>
                      {/* <p>
                        "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                        justo. Donec quam dolor, congue a fringilla sed, maximus
                        et urna."
                      </p> */}
                      <span>Software Developer</span>
                    </div>
                  </div>
                  {/* </div> */}
                </OwlCarousel>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
