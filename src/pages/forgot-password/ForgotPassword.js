import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./forgot-password.styles.scss";

const ForgotPasswordPage = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      email: e.target.email.value,
    });
    const response = await fetch("http://localhost:3000/password_reset", {
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
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
        <p>
          Instructions on resetting your password have been sent to the email
          provided.
        </p>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" placeholder="Email" name="email" />
        <CustomButton type="submit">Reset Password</CustomButton>
      </form>
      <span>You will receive an email with a link to reset your password.</span>
    </div>
  );
};

export default ForgotPasswordPage;
