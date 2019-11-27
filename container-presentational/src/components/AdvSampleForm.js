import React, { Component } from "react";
import AdvInput from "./AdvInput";
import Helloo from "./Hello/Helloo";

const formData = {
  username: {
    elementType: "input",
    elementConfiguration: {
      type: "text",
      placeHolder: "user name here"
    },
    elementValue: ""
  },
  country: {
    elementType: "select",
    elementConfiguration: {
      type: "select",
      placeHolder: "country",
      options: [
        { value: "in", desc: "India" },
        { value: "UK", desc: "United Kingdom" },
        { value: "US", desc: "United States" }
      ]
    },
    elementValue: "UK"
  },
  gender: {
    elementType: "radio",
    elementConfiguration: {
      type: "radio",
      name: "gender",
      options: [
        { value: "M", desc: "Male" },
        { value: "F", desc: "Female" }
      ]
    },
    elementValue: "M"
  },
  accept: {
    elementType: "checkbox",
    elementConfiguration: {
      type: "checkbox",
      name: "hobby",
      options: [
        { value: "cric", desc: "Cricket" },
        { value: "foot", desc: "FootBall" }
      ]
    },
    elementValue: ""
  },
  comment: {
    elementType: "textarea",
    elementConfiguration: {
      type: "textarea",
      name: "textarea",
      rows: "5",
      cols: "50"
    },
    elementValue: "This is text area ."
  },
  submitButton: {
    elementType: "submit",
    elementConfiguration: {
      type: "submit",
      form: ""
    },
    elementValue: "Submit"
  }
};
class AdvSimpleForm extends Component {
  state = {
    username: "",
    country: "uk",
    gender: "M",
    accept: [],
    comment: "This is comment",
    submitButton: ""
  };
  inputHandler(inputIdentifier, event) {
    console.log(inputIdentifier, event.target.value);

    if (event.target.type === "checkbox") {
      let hobies = [...this.state[inputIdentifier]];
      if (event.target.checked) {
        hobies.push(event.target.value);
      } else {
        hobies = [...hobies].filter(
          (list, index) => list !== event.target.value
        );
      }

      this.setState({
        [inputIdentifier]: hobies
      });
    } else {
      this.setState({
        [inputIdentifier]: event.target.value
      });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <h4>Input text</h4>
        <AdvInput
          elementType={formData.username.elementType}
          elementConfiguration={formData.username.elementConfiguration}
          elementValue={this.state.username}
          elementChanged={this.inputHandler.bind(this, "username")}
        />
        {/* <br />
        <h4>Select Drop dowm</h4>
        <AdvInput
          elementType={formData.country.elementType}
          elementConfiguration={formData.country.elementConfiguration}
          elementValue={this.state.country}
          elementChanged={this.inputHandler.bind(this, "country")}
        />
        <br />
        <h4>Radio button</h4>
        <AdvInput
          elementType={formData.gender.elementType}
          elementConfiguration={formData.gender.elementConfiguration}
          elementValue={this.state.gender}
          elementChanged={this.inputHandler.bind(this, "gender")}
        />
        <br />
        <h4>Check box</h4>
        <AdvInput
          elementType={formData.accept.elementType}
          elementConfiguration={formData.accept.elementConfiguration}
          elementValue={this.state.accept}
          elementChanged={this.inputHandler.bind(this, "accept")}
        />
        <h4>Text area</h4>
        <AdvInput
          elementType={formData.comment.elementType}
          elementConfiguration={formData.comment.elementConfiguration}
          elementValue={this.state.accommentcept}
          elementChanged={this.inputHandler.bind(this, "comment")}
        /> */}
        <Helloo />
        <h4>Submit form </h4>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default AdvSimpleForm;
