import React from "react";
import FormInput from "../form-input/FormInput";
import "./checkout-form.styles.scss";

const CheckoutForm = () => {
  return (
    <div className="checkout-form-container">
      <h2>Contact Information:</h2>
      <FormInput
        type="email"
        name="email"
        required
        asterisk
        placeholder="example@email.com"
      />
      <h2 className="shipping-details">Shipping Address:*</h2>
      <div className="full-name">
        <div className="first-name">
          <FormInput
            label="First Name:"
            name="firstName"
            type="text"
            required
          />
        </div>
        <div className="last-name">
          <FormInput label="Last Name:" name="lastName" type="text" required />
        </div>
      </div>
      <FormInput label="Address1" name="address1" type="text" required />
      <FormInput label="Address 2" name="address2" type="text" />
      <FormInput label="City:" name="city" type="text" required />
      <div className="other-shipping-details">
        <div className="state">
          <FormInput label="State:" name="state" type="text" required />
        </div>
        <div className="zipcode">
          <FormInput label="Zipcode:" name="zipcode" type="text" required />
        </div>
      </div>
      <input type="checkbox" />
      <label>Same as Billing address</label>
    </div>
  );
};

export default CheckoutForm;
