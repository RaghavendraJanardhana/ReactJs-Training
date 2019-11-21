import React, { Component } from "react";
import TeamRepetative from "./TeamRepetative";
class Team extends Component {
  render() {
    return (
      <section id="mu-team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-team-area">
                <div className="mu-team-header">
                  <h2 className="mu-heading-title">
                    OUR <span>TEAM</span>
                  </h2>
                  <span className="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div className="mu-team-content">
                  <div className="row">
                    <TeamRepetative
                      src="../assets/images/team-member-1.jpg"
                      HeadingTitle="Raghavendra J"
                      SpanField="Graphics Designer"
                    />

                    <TeamRepetative
                      src="../assets/images/team-member-2.jpg"
                      HeadingTitle="Manoj kumar N"
                      SpanField="Web Developer"
                    />
                    <TeamRepetative
                      src="../assets/images/team-member-2.jpg"
                      HeadingTitle="Kiran kashyap BK"
                      SpanField="Web Developer"
                    />
                    <TeamRepetative
                      src="../assets/images/team-member-3.jpg"
                      HeadingTitle="Emma Watson"
                      SpanField="Digital Marketer"
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
export default Team;
