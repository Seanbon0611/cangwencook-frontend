import React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./form-input.styles.scss";

const useStyles = makeStyles({
  root: {
    "padding-right": "10px",
    "padding-top": "10px"
  },
});

const FormInput = ({ inputField, label, ...otherProps }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.root}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <Input {...otherProps} />
    </FormControl>
  );
};

export default FormInput;
