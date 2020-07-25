import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    form: { name: "", email: "", message: "" },
  });

  const [btnState, setBtnState] = useState({
    text: "send message now",
  });

  function handleContact(e) {
    e.preventDefault();
    setBtnState({
      text: "Sending",
    });
    const data = formState.form;
    axios.post(config.baseUrl + "contact", { data }).then((res) => {
      if (res.data.status === true) {
        toast.error("Mail sent Successfully");
        setBtnState({
          text: "Mail sent Successfully",
        });
      } else {
        toast("Something went Wrong");
        setBtnState({
          text: "Try Again",
        });
      }
    });
  }

  function getName(e) {
    setFormState({
      form: {
        name: e.target.value,
        email: formState.form.email,
        message: formState.form.message,
      },
    });
  }

  function getEmail(e) {
    setFormState({
      form: {
        name: formState.form.name,
        email: e.target.value,
        message: formState.form.message,
      },
    });
  }

  function getMessage(e) {
    setFormState({
      form: {
        name: formState.form.name,
        email: formState.form.email,
        message: e.target.value,
      },
    });
  }

  return (
    <footer id="contact-us">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                          required
                          onChange={getName}
                          // style="background-color: rgba(250, 250, 250, 0.3);"
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="E-Mail Address"
                          required
                          onChange={getEmail}
                          // style="background-color: rgba(250, 250, 250, 0.3);"
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Your Message"
                          required
                          onChange={getMessage}
                          // style="background-color: rgba(250, 250, 250, 0.3);"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                          onClick={handleContact}
                        >
                          {btnState.text}
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="right-content col-lg-6 col-md-12 col-sm-12">
              <h2>
                More About <em>Bror Infotech</em>
              </h2>
              <p>
                Looking for IT Services? We can help, leave your contacts and we
                will be in touch shortly
                <br />
                <br />
                {/* If you need this contact form to send email to your inbox, you
					may follow our */}
                {/* <a rel="nofollow" href="# " target="_parent">
						contact
					</a>
					page for more detail. */}
                +91 7006984072
                <br /> info@brorinfotech.com
                <br />
                <br /> Srinagar, Jammu and Kashmir, 190001
              </p>
              <ul className="social">
                <li>
                  <a href="# ">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/7006984072">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="sub-footer">
              <p>
                Copyright &copy; {new Date().getFullYear()} |{" "}
                <a rel="nofollow" href="https://brorinfotech.com">
                  {" "}
                  Bror Infotech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
