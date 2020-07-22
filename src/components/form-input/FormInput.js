import React from "react";
import './form-input.styles.scss'

const FormInput = ({ inputField, label, ...otherProps }) => (
  <div className={inputField ? 'input-field' : ""}>
    {label ? <label>{label}</label> : null}
    <input {...otherProps} />
  </div>
);

export default FormInput;
