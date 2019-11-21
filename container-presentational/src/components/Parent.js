import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>I am a parent Component</h1>
        <Child name="one" />
        <Child name="two" />
      </div>
    );
  }
}

export default Parent;
