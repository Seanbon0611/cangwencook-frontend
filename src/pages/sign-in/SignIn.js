import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./sign-in.styles.scss";

const initialState = {
  email: "",
  password: "",
};

const Signin = ({ afterLogin }) => {
  const [loginError, setLoginError] = useState(null);
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
      if (user.error) {
        setLoginError(user.error);
      }
      afterLogin(user);
      clearState();
    });
  };
  return (
    <div className="sign-in-container">
      {loginError && <h1 style={{ color: "red" }}>{loginError}</h1>}
      <form onSubmit={handleSubmit}>
        <div className="sign-in-inputs">
          <h1 className="sign-in-title">Sign-in</h1>
          <div className="to-signup">
            <span>Don’t have an account?</span>
            <Link to="/signup" className="link-to">
              Click here to sign up.
            </Link>
          </div>
          <p>*Required</p>
          <FormInput
            asterisk
            type="text"
            value={email}
            label="Email"
            name="email"
            onChange={onChange}
          />
          <FormInput
            asterisk
            type="password"
            value={password}
            label="Password"
            name="password"
            onChange={onChange}
          />
          <CustomButton type="submit" className="ripple">
            Submit
          </CustomButton>
          <p>
            Forgot your password?{" "}
            <Link className="link-to" to="/forgot-password">
              Click here
            </Link>{" "}
            to reset.
          </p>
          <p>
            By signing up you accept the{" "}
            <span className="link-to">Terms of Service and Privacy Policy</span>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
