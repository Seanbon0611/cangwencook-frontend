import React, { useState } from "react";
import { Button, Select, MenuItem } from "@material-ui/core";
import FormInput from "../../components/form-input/FormInput";
import "./sign-up.styles.scss";
import states from "../../states";
import api from "../../services/api";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipcode: "",
};
const SignUp = ({ setSuccess }) => {
  const [
    {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      address1,
      address2,
      city,
      state,
      zipcode,
      phoneNumber,
    },
    setState,
  ] = useState(initialState);
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        phoneNumber: phoneNumber,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
      }),
    };
    api.user.signUp(config).then((res) => {
      if (res.msg === "Successfully Created") {
        setSuccess(true);
      } else if (res.error) {
        setErrors(res.error);
      }
    });
  };
  return (
    <div className="sign-up-container">
      <h1>Sign-up</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(errors).map((err) => (
          <h4 className="error">{`Error: ${err[0]} ${err[1][0]}`}</h4>
        ))}
        <div>
          <div className="form-container">
            <FormInput
              type="text"
              label="First Name"
              name="firstName"
              required
              value={firstName}
              onChange={onChange}
            />
            <FormInput
              type="text"
              label="Last Name"
              required
              name="lastName"
              value={lastName}
              onChange={onChange}
            />
            <FormInput
              type="text"
              label="Email"
              required
              name="email"
              value={email}
              onChange={onChange}
            />
            <FormInput
              type="password"
              required
              label="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <FormInput
              type="password"
              required
              label="Confirm Password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={onChange}
            />
            <div>
              <FormInput
                type="text"
                required
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
              />
            </div>
            <FormInput
              type="text"
              required
              label="Shipping Address"
              name="address1"
              value={address1}
              onChange={onChange}
            />
            <FormInput
              type="text"
              label="Shipping Address2"
              name="address2"
              value={address2}
              onChange={onChange}
            />
            <FormInput
              type="text"
              required
              label="City"
              name="city"
              value={city}
              onChange={onChange}
            />
            <Select
              label="State"
              onChange={onChange}
              name="state"
              value={state}
            >
              {Object.entries(states).map(([abb, name]) => (
                <MenuItem key={abb} value={abb}>
                  {abb}
                </MenuItem>
              ))}
            </Select>
            <FormInput
              type="text"
              required
              label="Zipcode:"
              name="zipcode"
              value={zipcode}
              onChange={onChange}
            />
          </div>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
