import React from "react";
import "./form-input.styles.scss";

const FormInput = ({
  asterisk,
  label,
  textarea,
  cols,
  rows,
  ...otherProps
}) => {
  return (
    <div className="input-container">
      {label ? (
        <label className="form-input-label">
          {asterisk ? `${label}*` : label}
        </label>
      ) : null}
      {textarea ? (
        <textarea className="form-input" {...otherProps}></textarea>
      ) : (
        <input className="form-input" {...otherProps} />
      )}
    </div>
  );
};

export default FormInput;
