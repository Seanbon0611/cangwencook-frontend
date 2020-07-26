import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import { Button } from "@material-ui/core";
import api from "../../services/api";
import "./sign-in.styles.scss";

const initialState = {
  email: "",
  password: "",
};

const Signin = ({ afterLogin, loginError }) => {
  const [{ email, password }, setState] = useState(initialState);

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
        email: email,
        password: password,
      }),
    };
    api.auth.login(config).then((user) => {
      afterLogin(user);
      clearState();
    });
  };
  return (
    <div>
      <h1>Sign-in</h1>
      <form onSubmit={handleSubmit}>
        <div className="sign-in-inputs">
          <FormInput
            type="text"
            value={email}
            inputField
            label="Email"
            name="email"
            onChange={onChange}
          />
          <FormInput
            type="password"
            inputField
            value={password}
            label="Password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
