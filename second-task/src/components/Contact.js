import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <section id="mu-contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-contact-area">
                <div class="mu-contact-header">
                  <h2 class="mu-heading-title">
                    CONTACT <span>US</span>
                  </h2>
                  <span class="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div class="mu-contact-content">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="mu-contact-left">
                        <div id="form-messages"></div>
                        <form
                          id="ajax-contact"
                          method="post"
                          action="mailer.php"
                          class="mu-contact-form"
                        >
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name"
                              id="name"
                              name="name"
                              required
                            ></input>
                          </div>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Enter Email"
                              id="email"
                              name="email"
                              required
                            ></input>
                          </div>
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              placeholder="Message"
                              id="message"
                              name="message"
                              required
                            ></textarea>
                          </div>
                          <button type="submit" class="mu-send-msg-btn">
                            <span>SUBMIT</span>
                          </button>
                        </form>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="mu-contact-right">
                        <h4>Biziness</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <address>
                          <p>
                            <i class="icon-location-pin"></i>Dooley Branch Rd
                            Millen, GA 30442, USA
                          </p>
                          <p>
                            <i class="icon-envelope"></i>contact@domain.com
                          </p>
                          <p>
                            <i class="icon-phone"></i>+90 987 678 9834
                          </p>
                        </address>
                        <div class="mu-social-media">
                          <a href="#">
                            <i class="icon-social-facebook"></i>
                          </a>
                          <a href="#">
                            <i class="icon-social-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="icon-social-google"></i>
                          </a>
                          <a href="#">
                            <i class="icon-social-linkedin"></i>
                          </a>
                          <a href="#">
                            <i class="icon-social-youtube"></i>
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
