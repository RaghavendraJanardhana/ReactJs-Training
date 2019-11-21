import React from "react";
const AdvInput = props => {
  console.log(props);
  let element = null;
  switch (props.elementType) {
    case "input":
      element = (
        <input
          type={props.elementConfiguration.type}
          placeholder={props.elementConfiguration.placeholder}
          value={props.elementValue}
          onChange={props.elementChanged}
        />
      );
      break;
    case "select":
      element = (
        <select onChange={props.elementChanged}>
          {props.elementConfiguration.options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.desc}
            </option>
          ))}
        </select>
      );
      break;
    case "radio":
      element = (
        <div>
          {props.elementConfiguration.options.map((item, index) => (
            <div key={index}>
              <input
                type={props.elementType}
                name={props.elementConfiguration.name}
                value={item.value}
                onChange={props.elementChanged}
              />
              {item.desc}
            </div>
          ))}
        </div>
      );
      break;

    case "checkbox":
      element = (
        <div>
          {props.elementConfiguration.options.map((item, index) => (
            <div key={index}>
              <input
                type={props.elementConfiguration.type}
                value={item.value}
                onChange={props.elementChanged}
              />
              {item.desc}
            </div>
          ))}
        </div>
      );

      break;

    case "textarea":
      element = (
        <textarea
          type={props.elementConfiguration.type}
          value={props.elementValue}
          onChange={props.elementChanged}
          rows={props.elementConfiguration.rows}
          cols={props.elementConfiguration.cols}
        ></textarea>
      );

      break;
    case "submit":
      element = (
        <input
          type={props.elementConfiguration.type}
          value={props.elementValue}
          onChange={props.elementChanged}
        ></input>
      );

      break;

    default:
      element = (
        <input
          type={props.elementConfiguration.type}
          placeholder={props.elementConfiguration.placeholder}
          value={props.elementValue}
          onChange={props.elementChanged}
        />
      );
  }

  return <>{element}</>;
};

export default AdvInput;
