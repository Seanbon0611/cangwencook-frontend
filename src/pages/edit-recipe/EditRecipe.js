import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import "./edit-recipe.styles.scss";

const EditRecipe = ({ recipe }) => {
  const { attributes } = recipe;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    calories: null,
    netCarbs: null,
    fat: null,
    protein: null,
    keto: null,
    paleo: null,
    lowCalorie: null,
    dairyFree: null,
    glutenFree: null,
    quick: null,
    ingredients: {},
    instructions: {},
  });
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="edit-recipe-container">
      {console.log(attributes)}
      <form>
        <FormInput
          label="Title:"
          name="title"
          type="text"
          defaultValue={attributes.title}
        />
        <label className="form-input-label" htmlFor="description">
          Description:
          <textarea
            name="description"
            rows="10"
            defaultValue={attributes.description}
            className="form-input"
          ></textarea>
        </label>
        <FormInput label="Image:" name="image" type="file" />
        <FormInput
          label="Calories"
          name="calories"
          type="number"
          defaultValue={attributes.calories}
        />
        <FormInput
          label="Net Carbs:"
          name="carbs"
          type="number"
          defaultValue={attributes.net_carbs}
        />
        <FormInput
          label="Fats:"
          name="fats"
          type="number"
          defaultValue={attributes.fat}
        />
        <FormInput
          label="Protein:"
          name="protein"
          type="number"
          defaultValue={attributes.protein}
        />
        <label htmlFor="keto">Keto:</label>
        <input type="checkbox" name="keto" />
        <label htmlFor="paleo">Paleo:</label>
        <input type="checkbox" name="paleo" />
        <label htmlFor="low_calorie">Paleo:</label>
        <input type="checkbox" name="low_calorie" />
        {attributes.ingredients.map((ingredient, index) => {
          return (
            <FormInput
              label={`Ingredient ${index + 1}:`}
              name={ingredient.name}
              type="text"
            />
          );
        })}
      </form>
    </div>
  );
};

export default EditRecipe;
