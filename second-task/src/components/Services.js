import React, { Component } from "react";
import ServicesRepetative from "./ServicesRepetative";
class Services extends Component {
  render() {
    return (
      <section id="mu-service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-service-area">
                <div className="mu-service-header">
                  <h2 className="mu-heading-title">
                    OUR <span>SERVICES</span>
                  </h2>
                  <span className="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div className="mu-service-content">
                  <div className="row">
                    <ServicesRepetative
                      icon="icon-vector"
                      heading="UI/UX/RX Design"
                      paragraph="
                      Lorem ipsum dolor sit amet, consect adipis elit minim
                      veniam ettis inkeras."
                    />

                    <ServicesRepetative
                      icon="icon-screen-desktop"
                      heading="Web Development"
                      paragraph="    Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                      "
                    />

                    <ServicesRepetative
                      icon="icon-briefcase"
                      heading="Branding"
                      paragraph="    Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                      "
                    />

                    <ServicesRepetative
                      icon="icon-screen-tablet"
                      heading="Responsive Layout"
                      paragraph="    Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
                      "
                    />

                    <ServicesRepetative
                      icon="icon-screen-smartphone"
                      heading="Mobile Application"
                      paragraph="
                          Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras."
                    />

                    <ServicesRepetative
                      icon="icon-graph"
                      heading="Digital Marketing"
                      paragraph="                          Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras.
"
                    />

                    <ServicesRepetative
                      icon="icon-camrecorder"
                      heading="Background Videos"
                      paragraph="Lorem ipsum dolor sit amet, consect adipis elit minim
                          veniam ettis inkeras."
                    />

                    <ServicesRepetative
                      icon="icon-people"
                      heading="24/7 Live Support"
                      paragraph=" Lorem ipsum dolor sit amet, consect adipis elit minim
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
export default Services;
