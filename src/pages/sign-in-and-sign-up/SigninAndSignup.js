import React, { useState, useEffect } from "react";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

const SigninAndSignup = ({ afterLogin, loginError }) => {
  const [success, setSuccess] = useState(false)
  if (success === true) {
    return (
      <h1>Success</h1>
    )
  } else {
  return (
    <div>
      <SignIn afterLogin={afterLogin} loginError={loginError} />
      <SignUp setSuccess={setSuccess}/>
    </div>
  )};
};

export default SigninAndSignup;
