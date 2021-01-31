import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./sign-in.styles.scss";

const Signin = ({ afterLogin }) => {
  const [loginError, setLoginError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearState = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
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
      <form onSubmit={handleSubmit}>
        <div className="sign-in-inputs">
          <h1 className="sign-in-title">Sign-in</h1>
          <div className="to-signup">
            <span>Don’t have an account?</span>
            <Link to="/signup" className="link-to">
              Click here to sign up.
            </Link>
            <p style={{ paddingTop: "5px" }}>*Required</p>
          </div>
          <FormInput
            asterisk
            type="text"
            value={email}
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            asterisk
            type="password"
            value={password}
            label="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginError && <h1 style={{ color: "red" }}>{loginError}</h1>}
          <div style={{ padding: "20px 0px 10px 0px" }}>
            <CustomButton type="submit" className="ripple custom-button">
              Submit
            </CustomButton>
          </div>
          <div style={{ padding: "20px 0px 20px 0px" }}>
            <p>
              Forgot your password?{" "}
              <Link className="link-to" to="/forgot-password">
                Click here
              </Link>{" "}
              to reset.
            </p>
          </div>
          <div style={{ padding: "0px 0px 20px 0px" }}>
            <p>
              By signing up you accept the{" "}
              <span className="link-to">
                Terms of Service and Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
