import React from "react";
import FormInput from "../../components/form-input/FormInput";

const NewRecipePage = () => {
  return (
    <div>
      <form>
        <FormInput type="text" label="Title" asterisk />
      </form>
    </div>
  );
};

export default NewRecipePage;
