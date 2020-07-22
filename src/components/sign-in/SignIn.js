import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import api from "../../services/api";

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
    api.auth.login(config).then(user => afterLogin(user)).then(clearState)
  };
  return (
    <div>
      <h1>Sign-in</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={email}
          label="Email:"
          name="email"
          onChange={onChange}
        />
        <FormInput
          type="password"
          value={password}
          label="Password:"
          name="password"
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signin;
