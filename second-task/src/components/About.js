import React, { Component } from "react";
import AboutRepetative from "./AboutRepetative";
class About extends Component {
  render() {
    return (
      <section id="mu-about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-about-area">
                <div className="mu-about-header">
                  <h2 className="mu-heading-title">
                    ABOUT <span>US</span>
                  </h2>
                  <span className="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div className="mu-about-content">
                  <div className="row">
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
