import React from "react";
import { ReactComponent as Keto } from "../../assets/keys/keto.svg";
import { ReactComponent as AirFryer } from "../../assets/keys/air-fryer.svg";
import { ReactComponent as DairyFree } from "../../assets/keys/dairy-free.svg";
import { ReactComponent as GlutenFree } from "../../assets/keys/gluten-free.svg";
import { ReactComponent as LowCalorie } from "../../assets/keys/low-calorie.svg";
import { ReactComponent as RecipeKeys } from "../../assets/keys/recipe-key-svg.svg";
import "./single-recipe.styles.scss";

const SingleRecipe = ({ recipe }) => {
  const { attributes } = recipe;
  return (
    <div>
      <h1 className="recipe-title">{attributes.title}</h1>
      <div className="keys">
        {attributes.keto ? <Keto className="key-type" /> : null}
        {attributes.dairy_free ? <DairyFree className="key-type" /> : null}
        {attributes.low_calorie ? <LowCalorie className="key-type" /> : null}
        {attributes.gluten_free ? <GlutenFree className="key-type" /> : null}
      </div>
      <p>Calories: {attributes.calories}</p>
      <div className="recipe-image-keys-container">
        <img className="recipe-image" src={attributes.image} />
        <div className="recipe-keys">
          <RecipeKeys />
        </div>
      </div>
      <h2>Ingredients:</h2>
      {attributes.ingredients.map((ingredient) => (
        <p>
          {ingredient.measurement} of {ingredient.name}
        </p>
      ))}
      <h2>Procedure:</h2>
      {attributes.instructions.map((step, index) => (
        <p>
          Step {index + 1}: {step.step}
        </p>
      ))}
    </div>
  );
};

export default SingleRecipe;
