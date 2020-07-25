import React, { Fragment } from "react";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <Fragment>
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <Fade left>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <div className="features-item">
                  <div className="features-icon">
                    <h2>01</h2>
                    <img src="assets/features-icon-1.png" alt=""></img>
                    <h4>Software Development</h4>
                    {/* <p>
                      Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                      diam, nec consectetur diam.
                    </p> */}
                    <a href="#" className="main-button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                // data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
              >
                <div className="features-item">
                  <div className="features-icon">
                    <h2>02</h2>
                    <img src="assets/features-icon-2.png" alt=""></img>
                    <h4>Mobile App Development</h4>
                    {/* <p>
                      Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                      diam, nec consectetur diam.
                    </p> */}
                    <a href="#" className="main-button">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                // data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <div className="features-item">
                  <div className="features-icon">
                    <h2>03</h2>
                    <img src="assets/features-icon-3.png" alt=""></img>
                    <h4>Web Development</h4>
                    {/* <p>
                      Curabitur pulvinar vel odio sed sagittis. Nam maximus ex
                      diam, nec consectetur diam.
                    </p> */}
                    <a href="#" className="main-button">
                      More Detail
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <div className="left-image-decor"></div>
      <section className="section" id="promotion">
        <div className="container">
          <div className="row">
            <Fade left>
              <div
                className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/left-image.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="App"
                ></img>
              </div>
            </Fade>
            {/* <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
              <ul>
                <Fade right>
                  <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="assets/about-icon-01.png" alt=""></img>
                    <div className="text">
                      <h4>Vestibulum pulvinar rhoncus</h4>
                      <p>
                        Please do not redistribute this template ZIP file for a
                        download purpose. You may{" "}
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/contact"
                          target="_parent"
                        >
                          contact
                        </a>{" "}
                        us for additional licensing of our template or to get a
                        PSD file.
                      </p>
                    </div>
                  </li>
                </Fade>
                <Fade right>
                  <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                    <img src="assets/about-icon-02.png" alt=""></img>
                    <div className="text">
                      <h4>Sed blandit quam in velit</h4>
                      <p>
                        You can{" "}
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/tm-540-lava-landing-page"
                        >
                          download Lava Template
                        </a>{" "}
                        from our website. Duis viverra, ipsum et scelerisque
                        placerat, orci magna consequat ligula.
                      </p>
                    </div>
                  </li>
                </Fade>
                <Fade right>
                  <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                    <img src="assets/about-icon-03.png" alt=""></img>
                    <div className="text">
                      <h4>Aenean faucibus venenatis</h4>
                      <p>
                        Phasellus in imperdiet felis, eget vestibulum nulla.
                        Aliquam nec dui nec augue maximus porta. Curabitur
                        tristique lacus.
                      </p>
                    </div>
                  </li>
                </Fade>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
