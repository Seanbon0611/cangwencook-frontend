import React, { Fragment } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const RecipeFormIngredients = ({
  ingredients,
  next,
  prev,
  handleIngredientsChange,
  addIngredients,
}) => {
  return (
    <div>
      <input type="button" onClick={addIngredients} value="Add Ingredient" />
      {ingredients.map((ingredient, index) => {
        const nameId = `name-${index}`;
        const measurementId = `measurement-${index}`;
        return (
          <Fragment key={`${ingredient}~${index}`}>
            <label>
              {`Ingredient #${index + 1}:`}
              <FormInput
                label="Measurement:"
                type="text"
                name={measurementId}
                className="measurement"
                data-index={index}
                onChange={handleIngredientsChange}
                defaultValue={ingredients[index].measurement}
                placeholder="Ex: 2 teaspoon"
              />
              <FormInput
                label="Ingrednient Name:"
                type="text"
                name={nameId}
                className="name"
                data-index={index}
                onChange={handleIngredientsChange}
                defaultValue={ingredients[index].name}
                placeholder="Ex: Sesame Oil"
              />
            </label>
          </Fragment>
        );
      })}
      <CustomButton onClick={prev}>Back</CustomButton>
      <CustomButton onClick={next}>Continue</CustomButton>
    </div>
  );
};

export default RecipeFormIngredients;
