import React, { Component } from "react";
class Child extends Component {
  render() {
    return (
      <div>
        <h1>I am a Child Component number {this.props.name}</h1>
      </div>
    );
  }
}

export default Child;
