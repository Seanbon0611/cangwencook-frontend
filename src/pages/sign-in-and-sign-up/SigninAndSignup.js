import React, { useState, useEffect } from "react";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";
import "./sign-in-and-sign-up.styles.scss";

const SigninAndSignup = ({ afterLogin, loginError }) => {
  const [success, setSuccess] = useState(false);
  if (success === true) {
    return <h1>Success</h1>;
  } else {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn afterLogin={afterLogin} loginError={loginError} />
        <SignUp setSuccess={setSuccess} />
      </div>
    );
  }
};

export default SigninAndSignup;
