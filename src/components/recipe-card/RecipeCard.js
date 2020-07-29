import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Keto } from "../../assets/keys/keto.svg";
import { ReactComponent as AirFryer } from "../../assets/keys/air-fryer.svg";
import { ReactComponent as DairyFree } from "../../assets/keys/dairy-free.svg";
import { ReactComponent as GlutenFree } from "../../assets/keys/gluten-free.svg";
import { ReactComponent as LowCalorie } from "../../assets/keys/low-calorie.svg";
import "./recipe-card.styles.scss";

const RecipeCard = ({ recipe }) => {
  const { attributes } = recipe;
  return (
    <div className="recipe-card-container">
      <Link to={`/recipes/${recipe.id}`}>
        <img className="recipe-thumbnail" src={attributes.image} />
      </Link>
      <div className="keys">
        {attributes.keto ? <Keto className="key-type" /> : null}
        {attributes.dairy_free ? <DairyFree className="key-type" /> : null}
        {attributes.low_calorie ? <LowCalorie className="key-type" /> : null}
        {attributes.gluten_free ? <GlutenFree className="key-type" /> : null}
      </div>
      <h2 className="recipe-title">{attributes.title}</h2>
      <p variant="body1">{attributes.description}</p>
    </div>
  );
};

export default RecipeCard;
