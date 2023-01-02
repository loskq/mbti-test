import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        onBlur={props.onBlur}
        onChange={props.onChange}
        id={props.id}
        type={props.type}
      />
    </div>
  );
}

export default Input;
