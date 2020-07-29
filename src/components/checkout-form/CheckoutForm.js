import React from "react";
import FormInput from "../form-input/FormInput";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./checkout-form.styles.scss";

const CheckoutForm = () => {
  return (
    <div>
      <form>
        <FormInput
          label="Contact Information:"
          type="email"
          required
          asterisk
          placeholder="example@email.com"
        />
        <h1 class="shipping-details">Shipping Address:*</h1>
        <div class="full-name">
          <FormInput label="First Name:" type="text" required />
          <FormInput label="Last Name:" type="text" required />
        </div>
        <FormInput label="Address" type="text" required />
        <FormInput label="Address 2" type="text" required />
        <FormInput label="First Name:" type="text" required />
        <div class="other-shipping-details">
          <FormInput label="First Name:" type="text" required />
          <FormInput label="First Name:" type="text" required />
          <FormInput label="First Name:" type="text" required />
        </div>
        <input type="checkbox" />
        <label>Same as Billing address</label>
        <div class="payment-info">
          <label>
            Card number
            <CardNumberElement className="card-input" />
          </label>
          <label>
            Expiration date
            <CardExpiryElement className="card-input" />
          </label>
          <label>
            CVC
            <CardCvcElement className="card-input" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
