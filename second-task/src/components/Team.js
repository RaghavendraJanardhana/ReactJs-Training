import React, { Component } from "react";
import TeamRepetative from "./TeamRepetative";
class Team extends Component {
  render() {
    return (
      <section id="mu-team">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-team-area">
                <div class="mu-team-header">
                  <h2 class="mu-heading-title">
                    OUR <span>TEAM</span>
                  </h2>
                  <span class="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div class="mu-team-content">
                  <div class="row">
                    <TeamRepetative
                      src="../assets/images/team-member-1.jpg"
                      HeadingTitle="Alice Boga"
                      SpanField="Graphics Designer"
                    />

                    <TeamRepetative
                      src="../assets/images/team-member-2.jpg"
                      HeadingTitle="Jhon Doe"
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
