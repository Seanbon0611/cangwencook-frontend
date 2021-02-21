import React from "react";
import FormInput from "../form-input/FormInput";
import "./newsletter-form.styles.scss";

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {};
  };
  return (
    <div className="newsletter-form">
      <div className="newsletter-input">
        <FormInput
          style={{ width: "80%" }}
          type="text"
          name="email"
          required
          placeholder="E-mail address"
        />
      </div>
    </div>
  );
};
export default NewsletterForm;
