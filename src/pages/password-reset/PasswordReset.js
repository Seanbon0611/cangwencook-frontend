import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./password-reset.styles.scss";

const PasswordResetPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);
  return (
    <div>
      <form>
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
};

export default PasswordResetPage;
