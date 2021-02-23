import React from "react";
import FormInput from "../form-input/FormInput";
import "./newsletter-form.styles.scss";

const NewsletterForm = ({ onChange }) => {
  return (
    <div className="newsletter-form">
      <div className="newsletter-input">
        <FormInput
          style={{ width: "80%" }}
          type="email"
          name="email"
          required
          placeholder="E-mail address"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default NewsletterForm;
