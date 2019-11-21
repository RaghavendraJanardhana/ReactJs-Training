import React, { Component } from "react";
class OurClientRepetative extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-2">
        <div className="mu-clients-content-single">
          <img src={this.props.src} alt="brand image"></img>
        </div>
      </div>
    );
  }
}
export default OurClientRepetative;
