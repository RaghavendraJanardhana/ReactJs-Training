import React, { Component } from "react";
class AboutRepetative extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="mu-about-content-single">
          <span className="mu-about-icon-box">
            <i className={this.props.icon}></i>
          </span>
          <h4>{this.props.heading}</h4>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}
export default AboutRepetative;
