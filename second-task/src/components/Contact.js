import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <section id="mu-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-contact-area">
                <div className="mu-contact-header">
                  <h2 className="mu-heading-title">
                    CONTACT <span>US</span>
                  </h2>
                  <span className="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div className="mu-contact-content">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mu-contact-left">
                        <div id="form-messages"></div>
                        <form
                          id="ajax-contact"
                          method="post"
                          action="mailer.php"
                          className="mu-contact-form"
                        >
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              id="name"
                              name="name"
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              id="email"
                              name="email"
                              required
                            ></input>
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Message"
                              id="message"
                              name="message"
                              required
                            ></textarea>
                          </div>
                          <button type="submit" className="mu-send-msg-btn">
                            <span>SUBMIT</span>
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mu-contact-right">
                        <h4>Biziness</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <address>
                          <p>
                            <i className="icon-location-pin"></i>Dooley Branch
                            Rd Millen, GA 30442, USA
                          </p>
                          <p>
                            <i className="icon-envelope"></i>contact@domain.com
                          </p>
                          <p>
                            <i className="icon-phone"></i>+90 987 678 9834
                          </p>
                        </address>
                        <div className="mu-social-media">
                          <a href="#">
                            <i className="icon-social-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="icon-social-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="icon-social-google"></i>
                          </a>
                          <a href="#">
                            <i className="icon-social-linkedin"></i>
                          </a>
                          <a href="#">
                            <i className="icon-social-youtube"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
