import React, { useEffect } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import "./account.styles.scss";

const AccountPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="account-page-container">
      <div className="account-header">
        <h1>Account Profile</h1>
      </div>
      <div className="split">
        <div>
          <form>
            <FormInput type="text" label="First Name:" asterisk />
            <FormInput type="text" label="Last Name:" asterisk />
            <FormInput type="text" label="Address1:" />
            <FormInput type="text" label="Address2:" />
            <FormInput type="text" label="City:" />
            <FormInput label="State:" />
            <FormInput type="text" label="Zipcode:" />
            <FormInput
              type="text"
              label="Phone:"
              placeholder="If we need to contact you"
            />
            <input type="checkbox" />
            <label>Set as Default Address?</label>
            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </div>
        <div>
          <h1>Order History Goes Here</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
