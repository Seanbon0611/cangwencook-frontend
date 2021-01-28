import React from "react";
import FormInput from "../form-input/FormInput";
import "./newsletter-form.styles.scss";

const NewsletterForm = () => {
  return (
    <div className="newsletter-form">
      <input type="hidden" name="u" value="7" />
      <input type="hidden" name="f" value="7" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
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
