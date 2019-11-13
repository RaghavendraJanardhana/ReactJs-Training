import React, { Component } from "react";
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
                    <div class="col-sm-6 col-md-4">
                      <div class="mu-team-content-single">
                        <div class="mu-team-profile">
                          <img
                            src="../assets/images/team-member-1.jpg"
                            alt="team member"
                          ></img>
                          <div class="mu-team-social-info">
                            <a href="#">
                              <i class="icon-social-facebook"></i>
                            </a>
                            <a href="#">
                              <i class="icon-social-twitter"></i>
                            </a>
                            <a href="#">
                              <i class="icon-social-linkedin"></i>
                            </a>
                          </div>
                        </div>
                        <div class="mu-team-info">
                          <h4>Alice Boga</h4>
                          <span>Graphics Designer</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <div class="mu-team-content-single">
                        <div class="mu-team-profile">
                          <img
                            src="../assets/images/team-member-2.jpg"
                            alt="team member"
                          ></img>
                          <div class="mu-team-social-info">
                            <a href="#">
                              <i class="icon-social-facebook"></i>
                            </a>
                            <a href="#">
                              <i class="icon-social-twitter"></i>
                            </a>
                            <a href="#">
                              <i class="icon-social-linkedin"></i>
                            </a>
                          </div>
                        </div>
                        <div class="mu-team-info">
                          <h4>Jhon Doe</h4>
                          <span>Web Developer</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                      <div class="mu-team-content-single">
                        <div class="mu-team-profile">
                          <img
                            src="../assets/images/team-member-3.jpg"
                            alt="team member"
                          ></img>
                          <div class="mu-team-social-info">
                            <a href="#">
                              <i class="icon-social-facebook"></i>
                            </a>
                            <a href="#">
                              <i class="icon-social-twitter"></i>
                            </a>
                            <a href="#">
                              <i class="icon-social-linkedin"></i>
                            </a>
                          </div>
                        </div>
                        <div class="mu-team-info">
                          <h4>Emma Watson</h4>
                          <span>Digital Marketer</span>
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
export default Team;
