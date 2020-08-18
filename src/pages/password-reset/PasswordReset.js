import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./password-reset.styles.scss";

const PasswordResetPage = ({ token }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      token: token,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value,
    });
    const response = await fetch("http://localhost:3000/reset_password", {
      method: "PATCH",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "applicaiton/json",
      },
      body: data,
    });
    const json = await response.json();
    console.log(json);
    if (json.msg) {
      setSuccess(true);
    }
  };
  if (success === true) {
    return (
      <div>
        <h1>Your Password Has Been Reset.</h1>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="password"
            label="New Password"
            asterisk
            name="password"
          />
          <FormInput
            type="password"
            label="Confirm New Password"
            asterisk
            name="password-confirmation"
          />
          <CustomButton type="submit">Submit New Password</CustomButton>
        </form>
      </div>
    );
  }
};

export default PasswordResetPage;