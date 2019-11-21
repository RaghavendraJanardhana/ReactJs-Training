import React, { Component } from "react";
import OurClientRepetative from "./OurClientRepetative";
class OurClient extends Component {
  render() {
    return (
      <section id="mu-clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-clients-area">
                <div className="mu-clients-header">
                  <h2 className="mu-heading-title">
                    OUR <span>CLIENTS</span>
                  </h2>
                  <span className="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>
                <OurClientRepetative src="../assets/images/client-logo-1.png" />
                <OurClientRepetative src="../assets/images/client-logo-2.png" />

                <OurClientRepetative src="../assets/images/client-logo-3.png" />
                <OurClientRepetative src="../assets/images/client-logo-5.png" />
                <OurClientRepetative src="../assets/images/client-logo-4.png" />

                <OurClientRepetative src="../assets/images/client-logo-6.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default OurClient;
