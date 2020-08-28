import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const RecipeFormDetails = ({ formData, next, prev, handleChange }) => {
  return (
    <div>
      <FormInput
        name="title"
        label="Title:"
        onChange={handleChange}
        type="text"
        defaultValue={formData.title}
      />
      <FormInput
        name="description"
        label="Description:"
        onChange={handleChange}
        type="text"
        textarea
        defaultValue={formData.description}
      />
      <FormInput
        name="calories"
        label="Calories:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.calories}
      />
      <FormInput
        name="netCarbs"
        label="Net Carbs:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.netCarbs}
      />
      <FormInput
        name="fat"
        label="Fat:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.fat}
      />
      <FormInput
        name="protein"
        label="Protein:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.protein}
      />
      <FormInput
        name="image"
        label="Image:"
        onChange={handleChange}
        type="file"
      />
      <CustomButton onClick={next}>Next</CustomButton>
    </div>
  );
};

export default RecipeFormDetails;
