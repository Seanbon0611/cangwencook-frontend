import React from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
const AccountPage = () => {
  return (
    <div>
      <div class="account-header">
        <h1>Account Profile</h1>
      </div>
      <div>
        <form>
          <FormInput label="First Name:" asterisk />
          <FormInput label="Last Name:" asterisk />
          <FormInput label="Address1:" asterisk />
          <FormInput label="Address2:" asterisk />
          <FormInput label="City:" asterisk />
          <FormInput label="State:" asterisk />
          <FormInput label="Zipcode:" asterisk />
          <FormInput label="Phone:" asterisk />
          <input type="checkbox" />
          <label>Set as Default Address?</label>
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
