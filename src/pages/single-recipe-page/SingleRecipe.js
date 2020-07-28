import React from "react";
import { Typography } from "@material-ui/core";
import "./single-recipe.styles.scss";

const SingleRecipe = ({ recipe }) => {
  const { attributes } = recipe;
  return (
    <div>
      <Typography variant="h4" className="recipe-title">
        {attributes.title}
      </Typography>
      <img className="recipe-image" src={attributes.image} />
    </div>
  );
};

export default SingleRecipe;
