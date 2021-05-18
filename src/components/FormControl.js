import React from "react";

function FormControl(props) {
  return (
    <div className="form-control">
      <label className="form-control__label">{props.name}</label>
      {props.children}
    </div>
  );
}

export default FormControl;
