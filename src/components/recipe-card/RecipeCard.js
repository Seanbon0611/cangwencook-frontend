import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import "./recipe-card.styles.scss";

const RecipeCard = ({ recipe, handleDelete }) => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const { attributes } = recipe;
  return (
    <div className="recipe-card-container">
      {isAdmin ? (
        <div>
          <button onClick={() => handleDelete(recipe.id)}>x</button>
          <Link to={`/recipes/${recipe.id}/edit`}>
            <img
              alt="recipe"
              className="recipe-thumbnail"
              src={attributes.image}
            />
          </Link>
        </div>
      ) : (
        <Link to={`/recipes/${recipe.id}`}>
          <img
            alt="recipe"
            className="recipe-thumbnail"
            src={attributes.image}
          />
        </Link>
      )}
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
      <h2 className="recipe-title">{attributes.title}</h2>
      <p variant="body1" className="recipe-desc">
        {attributes.description}
      </p>
    </div>
  );
};

export default RecipeCard;
