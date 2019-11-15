import React, { Component } from "react";
import AboutRepetative from "./AboutRepetative";
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
                    <AboutRepetative
                      icon="icon-puzzle"
                      heading="Clean Code"
                      paragraph="Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras."
                    />
                    <AboutRepetative
                      icon="icon-settings"
                      heading="Great Features"
                      paragraph="Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras."
                    />
                    <AboutRepetative
                      icon="icon-screen-tablet"
                      heading="Responsive Design"
                      paragraph="
                      Lorem ipsum dolor sit amet, consect adipis elit minim
                      veniam ettis inkeras."
                    />

                    <AboutRepetative
                      icon="icon-docs"
                      heading="Well Documented"
                      paragraph="
                      Lorem ipsum dolor sit amet, consect adipis elit minim
                      veniam ettis inkeras."
                    />
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
