import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
class Testimonial extends Component {
  state = {};
  render() {
    return (
      <section className="section" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  What They Think <em>About Us</em>
                </h2>
                <p>
                  Suspendisse vitae laoreet mauris. Fusce a nisi dapibus,
                  euismod purus non, convallis odio. Donec vitae magna ornare,
                  pellentesque ex vitae, aliquet urna.
                </p>
              </div>
            </div>
            <div
              className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              {/* <div className="owl-carousel owl-theme"> */}
              <OwlCarousel
                items={2}
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
                        src="assets/testimonial-author-1.png"
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
                    <h4>Jonathan Smart</h4>
                    <p>
                      “Nullam hendrerit, elit a semper pharetra, ipsum nibh
                      tristique tortor, in tempus urna elit in mauris.”
                    </p>
                    <span>Besta CTO</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/testimonial-author-1.png"
                        alt="Second Author"
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
                    <h4>Martino Tino</h4>
                    <p>
                      “Morbi non mi luctus felis molestie scelerisque. In ac
                      libero viverra, placerat est interdum, rhoncus leo.”
                    </p>
                    <span>Web Analyst</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/testimonial-author-1.png"
                        alt="Author Third"
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
                    </ul>
                    <h4>George Tasa</h4>
                    <p>
                      “Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                      justo. Donec quam dolor, congue a fringilla sed, maximus
                      et urna.”
                    </p>
                    <span>System Admin</span>
                  </div>
                </div>
                <div className="item service-item">
                  <div className="author">
                    <i>
                      <img
                        src="assets/testimonial-author-1.png"
                        alt="Fourth Author"
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
                    <h4>Sir James</h4>
                    <p>
                      "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula
                      justo. Donec quam dolor, congue a fringilla sed, maximus
                      et urna."
                    </p>
                    <span>New Villager</span>
                  </div>
                </div>
                {/* </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
