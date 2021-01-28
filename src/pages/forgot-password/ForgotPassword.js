import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./forgot-password.styles.scss";
import api from "../../services/api";

const ForgotPasswordPage = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);
  const handleSubmit = async (e) => {
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
      }),
    };

    api.auth.passwordReset(config).then((data) => {
      console.log(data);
      if (data.msg) {
        setSuccess(true);
      }
    });
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
    <div className="forgot-password-page">
      <form className="email-submit" onSubmit={handleSubmit}>
        <h1 className="reset-msg">
          You will receive an email with a link to reset your password.
        </h1>
        <div className="email-field">
          <FormInput
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="submit-email">
          <CustomButton type="submit">Reset Password</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
