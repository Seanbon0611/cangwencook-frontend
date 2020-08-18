import React from "react";
import { ReactComponent as Keto } from "../../assets/keys/keto.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Comment } from "../../assets/icons/comment.svg";
import { ReactComponent as Bookmark } from "../../assets/icons/bookmark.svg";
import { ReactComponent as AirFryer } from "../../assets/keys/air-fryer.svg";
import { ReactComponent as DairyFree } from "../../assets/keys/dairy-free.svg";
import { ReactComponent as GlutenFree } from "../../assets/keys/gluten-free.svg";
import { ReactComponent as LowCalorie } from "../../assets/keys/low-calorie.svg";
import { ReactComponent as RecipeKeys } from "../../assets/keys/recipe-key-svg.svg";
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
      </div>
      <p>Calories: {attributes.calories}</p>
      <p>Fat: {attributes.fat}g</p>
      <p>Net Carbs: 5g</p>
      <div className="recipe-image-keys-container">
        <div className="recipe-image-container">
          <img className="recipe-image" alt="recipe" src={attributes.image} />
          <div className="clickable-container">
            <div className="interactable-container">
              <Heart className="interactable" />
              <Comment className="interactable" />
              <Bookmark className="interactable" />
            </div>
            <div className="btns-container">
              <div className="btn1">
                <CustomButton style={{ width: "200px" }}>
                  Play Video
                </CustomButton>
              </div>
              <div className="btn2">
                <CustomButton onClick={window.print} style={{ width: "200px" }}>
                  Print Recipe
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-keys">
          <RecipeKeys />
        </div>
      </div>
      <h2>Ingredients:</h2>
      {attributes.ingredients.map((ingredient) => (
        <p key={ingredient.name}>
          {ingredient.measurement} of {ingredient.name}
        </p>
      ))}
      <h2>Procedure:</h2>
      {attributes.instructions.map((step, index) => (
        <p key={index}>
          Step {index + 1}: {step.step}
        </p>
      ))}
    </div>
  );
};

export default SingleRecipe;
