import React from "react";
import CustomButton from "../custom-button/CustomButton";

const RecipeConfirmation = ({
  formData,
  ingredients,
  instructions,
  handleSubmit,
  prev,
}) => {
  const {
    title,
    description,
    image,
    calories,
    netCarbs,
    fat,
    protein,
    keto,
    paleo,
    lowCalorie,
    dairyFree,
    glutenFree,
    quick,
  } = formData;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{`Title: ${title}`}</p>
        <p>{`Description: ${description}`}</p>
        <p>
          Image: <img src={image} />
        </p>
        <p>{`Calories: ${calories}`}</p>
        <p>{`Net Carbs: ${netCarbs}`}</p>
        <p>{`Fat: ${fat}`}</p>
        <p>{`Protein: ${protein}`}</p>
        <p>Ingredients: </p>
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li
                key={index}
              >{`${ingredient.measurement} of ${ingredient.name}`}</li>
            );
          })}
        </ul>
        <CustomButton onClick={prev}>Back</CustomButton>
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default RecipeConfirmation;
