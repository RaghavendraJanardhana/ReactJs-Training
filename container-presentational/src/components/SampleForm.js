import React, { Component } from "react";
import Input from "./Input";
class SimpleForm extends Component {
  state = {
    username: ""
  };
  inputHandler(inputIdentifier, event) {
    console.log(inputIdentifier, event.target.value);
    this.setState({
      username: event.target.value
    });
  }
  render() {
    return (
      <form>
        <Input
          elementType="text"
          elementPlaceHolder="username"
          elementValue={this.state.username}
          elementChanged={this.inputHandler.bind(this, "username")}
        />
      </form>
    );
  }
}
export default SimpleForm;
