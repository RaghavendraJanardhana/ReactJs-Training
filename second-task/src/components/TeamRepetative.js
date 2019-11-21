import React, { Component } from "react";
import PortfolioRepetative from "./PortfolioRepetative";
class TeamRepetative extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="mu-team-content-single">
          <div className="mu-team-profile">
            <img src={this.props.src} alt="team member"></img>
            <div className="mu-team-social-info">
              <a href="#">
                <i className="icon-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon-social-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="mu-team-info">
            <h4>{this.props.HeadingTitle}</h4>
            <span>{this.props.SpanField}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamRepetative;
