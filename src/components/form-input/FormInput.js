import React from "react";
import "./form-input.styles.scss";


const FormInput = ({ asterisk, label, ...otherProps }) => {
  return (
    <div className="input-container">
      {label ? (
        <label className="form-input-label">
          {asterisk ? `${label}*` : label}
        </label>
      ) : null}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
