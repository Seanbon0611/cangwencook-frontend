import React from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core';
import './form-input.styles.scss'

const FormInput = ({ inputField, label, ...otherProps }) => (
  <FormControl>
  {label ? <InputLabel>{label}</InputLabel> : null}
  <Input {...otherProps}/>
  </FormControl>
);

export default FormInput;
