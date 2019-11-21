import React from "react";
const Input = props => {
  return (
    <input
      type={props.elementType}
      placeholder={props.elementPlaceHolder}
      value={props.elementValue}
      onChange={props.elementChanged}
    />
  );
};

export default Input;
