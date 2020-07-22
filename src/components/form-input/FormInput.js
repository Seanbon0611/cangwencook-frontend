import React from "react";

const FormInput = ({ label, ...otherProps }) => (
  <div>
    {label ? <label>{label}</label> : null}
    <input className="" {...otherProps} />
  </div>
);

export default FormInput;
