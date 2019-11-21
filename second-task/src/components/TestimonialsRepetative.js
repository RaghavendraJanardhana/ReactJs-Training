import React, { Component } from "react";
class TestimonialsRepetative extends Component {
  render() {
    return (
      <li>
        <p>{this.props.pGraph}</p>
        <h5 className="mu-ct-name">{this.props.Heading5}</h5>
        <span className="mu-ct-title">{this.props.SpanField}</span>
      </li>
    );
  }
}
export default TestimonialsRepetative;
