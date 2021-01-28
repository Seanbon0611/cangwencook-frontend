import React from "react";
import { ReactComponent as PlayButton } from "../../assets/icons/playbutton.svg";
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
import "./video-page.styles.scss";
const VideosPage = ({ recipes }) => {
  return (
    <div className="videos-container">
      {recipes.map((recipe) => (
        <div>
          <a href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg">
            <div className="playbutton">
              <PlayButton />
            </div>
            <img className="recipe-thumbnail" src={recipe.attributes.image} />
          </a>
          <div className="keys">
            {recipe.attributes.keto ? <Keto className="key-type" /> : null}
            {recipe.attributes.dairy_free ? (
              <DairyFree className="key-type" />
            ) : null}
            {recipe.attributes.low_calorie ? (
              <LowCalorie className="key-type" />
            ) : null}
            {recipe.attributes.gluten_free ? (
              <GlutenFree className="key-type" />
            ) : null}
            {recipe.attributes.air_fryer ? (
              <AirFryer className="key-type" />
            ) : null}
            {recipe.attributes.quick ? <Quick className="key-type" /> : null}
            {recipe.attributes.slowcooker ? (
              <SlowCooker className="key-type" />
            ) : null}
            {recipe.attributes.paleo ? <Paleo className="key-type" /> : null}
            {recipe.attributes.vegetarian ? (
              <Vegetarian className="key-type" />
            ) : null}
            {recipe.attributes.freezermeal ? (
              <FreezerMeal className="key-type" />
            ) : null}
            {recipe.attributes.seafood ? (
              <Seafood className="key-type" />
            ) : null}
            {recipe.attributes.instantpot ? (
              <InstantPot className="key-type" />
            ) : null}
          </div>
          <h2 className="recipe-title">{recipe.attributes.title}</h2>
          <p variant="body1">{recipe.attributes.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideosPage;
