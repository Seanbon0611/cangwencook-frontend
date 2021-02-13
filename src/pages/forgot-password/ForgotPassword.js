import React, { useState, useEffect } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./forgot-password.styles.scss";
import api from "../../services/api";

const ForgotPasswordPage = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="forgot-password-container">
      <div className="forgot-pass-form">
        <h1 className="page-title">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <p className="forgot-text">
            You will receive an email with a link to reset your password.
          </p>
          <div className="form-input">
            <FormInput
              label="Email"
              asterisk
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="reset-password-btn">
            <CustomButton type="submit">Reset Password</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
