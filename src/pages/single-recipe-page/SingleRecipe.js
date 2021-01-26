import React from "react";
import { ReactComponent as Keto } from "../../assets/keys/keto.svg";
import { ReactComponent as DairyFree } from "../../assets/keys/dairy-free.svg";
import { ReactComponent as GlutenFree } from "../../assets/keys/gluten-free.svg";
import { ReactComponent as AirFryer } from "../../assets/keys/air-fryer.svg";
import { ReactComponent as LowCalorie } from "../../assets/keys/low-calorie.svg";
import { ReactComponent as Quick } from "../../assets/keys/quick.svg";
import { ReactComponent as SlowCooker } from "../../assets/keys/slow-cooker.svg";
import { ReactComponent as FreezerMeal } from "../../assets/keys/freezer-meals.svg";
import { ReactComponent as Paleo } from "../../assets/keys/paleo.svg";
import { ReactComponent as Vegetarian } from "../../assets/keys/vegetarian.svg";
import { ReactComponent as Seafood } from "../../assets/keys/seafood.svg";
import { ReactComponent as InstantPot } from "../../assets/keys/instant-pot.svg";
import RecipeKey from "../../components/recipe-key/RecipeKey";
import CustomButton from "../../components/custom-button/CustomButton";
import "./single-recipe.styles.scss";

const SingleRecipe = ({ recipe }) => {
  const { attributes } = recipe;
  return (
    <div className="single-recipe-container">
      <h1 className="recipe-title">{attributes.title}</h1>
      <div className="keys">
        {attributes.keto ? <Keto className="key-type" /> : null}
        {attributes.dairy_free ? <DairyFree className="key-type" /> : null}
        {attributes.low_calorie ? <LowCalorie className="key-type" /> : null}
        {attributes.gluten_free ? <GlutenFree className="key-type" /> : null}
        {attributes.air_fryer ? <AirFryer className="key-type" /> : null}
        {attributes.quick ? <Quick className="key-type" /> : null}
        {attributes.slowcooker ? <SlowCooker className="key-type" /> : null}
        {attributes.paleo ? <Paleo className="key-type" /> : null}
        {attributes.vegetarian ? <Vegetarian className="key-type" /> : null}
        {attributes.freezermeal ? <FreezerMeal className="key-type" /> : null}
        {attributes.seafood ? <Seafood className="key-type" /> : null}
        {attributes.instantpot ? <InstantPot className="key-type" /> : null}
      </div>
      <div className="macros">
        <span>
          <strong>Calories</strong>: {attributes.calories}
        </span>
        <span>
          <strong>Fat</strong>: {attributes.fat}g
        </span>
        <span>
          <strong>Net-Carbs</strong>: 5g
        </span>
      </div>
      <div className="recipe-image-keys-container">
        <div className="recipe-image-container">
          <img className="recipe-image" alt="recipe" src={attributes.image} />
          <div className="clickable-container">
            <div className="btns-container">
              <div style={{ paddingRight: "10px" }}>
                <CustomButton className="btn1">Play Video</CustomButton>
              </div>
              <div>
                <CustomButton onClick={window.print} className="btn2">
                  Print Recipe
                </CustomButton>
              </div>
            </div>
          </div>
          <div>
            <h2>Ingredients:</h2>
            {attributes.ingredients.map((ingredient, index) => (
              <p style={{ padding: "10px 0px" }} key={index}>
                {ingredient.measurement} of {ingredient.name}
              </p>
            ))}
            <h2>Procedure:</h2>
            {attributes.instructions.map((step, index) => (
              <p style={{ padding: "10px 0px" }} key={index}>
                Step {index + 1}: {step.step}
              </p>
            ))}
          </div>
        </div>
        <div className="recipe-keys">
          <RecipeKey />
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
