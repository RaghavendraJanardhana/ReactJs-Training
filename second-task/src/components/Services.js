import React, { Component } from "react";
import ServicesRepetative from "./ServicesRepetative";
class Services extends Component {
  render() {
    return (
      <section id="mu-service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-service-area">
                <div class="mu-service-header">
                  <h2 class="mu-heading-title">
                    OUR <span>SERVICES</span>
                  </h2>
                  <span class="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div class="mu-service-content">
                  <div class="row">
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
