import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <section id="mu-about">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-about-area">
                <div class="mu-about-header">
                  <h2 class="mu-heading-title">
                    ABOUT <span>US</span>
                  </h2>
                  <span class="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div class="mu-about-content">
                  <div class="row">
                    <div class="col-md-3 col-sm-6">
                      <div class="mu-about-content-single">
                        <span class="mu-about-icon-box">
                          <i class="icon-puzzle"></i>
                        </span>
                        <h4>Clean Code</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="mu-about-content-single">
                        <span class="mu-about-icon-box">
                          <i class="icon-settings"></i>
                        </span>
                        <h4>Great Features</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="mu-about-content-single">
                        <span class="mu-about-icon-box">
                          <i class="icon-screen-tablet"></i>
                        </span>
                        <h4>Responsive Design</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="mu-about-content-single">
                        <span class="mu-about-icon-box">
                          <i class="icon-docs"></i>
                        </span>
                        <h4>Well Documented</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                        </p>
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
export default About;
