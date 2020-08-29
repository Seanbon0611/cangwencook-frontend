import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./recipe-form-details.styles.scss";

const RecipeFormDetails = ({ formData, next, prev, handleChange }) => {
  return (
    <div className="recipe-form-details-container">
      <FormInput
        name="title"
        label="Title:"
        onChange={handleChange}
        type="text"
        defaultValue={formData.title}
        required
      />
      <FormInput
        name="description"
        label="Description:"
        onChange={handleChange}
        type="text"
        textarea
        defaultValue={formData.description}
        required
      />
      <FormInput
        name="calories"
        label="Calories:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.calories}
        required
      />
      <FormInput
        name="netCarbs"
        label="Net Carbs:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.netCarbs}
        required
      />
      <FormInput
        name="fat"
        label="Fat:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.fat}
        required
      />
      <FormInput
        name="protein"
        label="Protein:"
        onChange={handleChange}
        type="number"
        defaultValue={formData.protein}
        required
      />
      <FormInput
        name="image"
        label="Image:"
        onChange={handleChange}
        type="file"
      />
      <div className="recipe-form-checkboxes">
        <FormInput
          name="keto"
          type="checkbox"
          label="Keto:"
          className="checkbox"
          checked={formData.keto}
          onChange={handleChange}
        />
        <FormInput
          name="glutenFree"
          type="checkbox"
          label="Gluten Free:"
          className="checkbox"
          checked={formData.glutenFree}
          onChange={handleChange}
        />
        <FormInput
          name="paleo"
          type="checkbox"
          label="Paleo:"
          className="checkbox"
          checked={formData.paleo}
          onChange={handleChange}
        />
        <FormInput
          name="lowCalorie"
          type="checkbox"
          label="Low Calorie:"
          className="checkbox"
          checked={formData.lowCalorie}
          onChange={handleChange}
        />
        <FormInput
          name="dairyFree"
          type="checkbox"
          label="Dairy-Free:"
          className="checkbox"
          checked={formData.dairyFree}
          onChange={handleChange}
        />
        <FormInput
          name="quick"
          type="checkbox"
          label="Quick:"
          className="checkbox"
          checked={formData.quick}
          onChange={handleChange}
        />
      </div>
      <CustomButton onClick={next}>Next</CustomButton>
    </div>
  );
};

export default RecipeFormDetails;
