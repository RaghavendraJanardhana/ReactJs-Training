import React, { Component } from "react";
class PortfolioRepetative extends Component {
  render() {
    return (
      <div
        className="col-xs-6 col-sm-4 col-md-4 filtr-item"
        data-category={this.props.dataCategory}
      >
        <a
          className="mu-imglink"
          href={this.props.href}
          title={this.props.title}
        >
          <img
            className="img-responsive"
            src={this.props.src}
            alt="image"
          ></img>
          <div className="mu-filter-item-content">
            <h4 className="mu-filter-item-title">{this.props.HeadingTitle}</h4>
          </div>
        </a>
      </div>
    );
  }
}
export default PortfolioRepetative;
