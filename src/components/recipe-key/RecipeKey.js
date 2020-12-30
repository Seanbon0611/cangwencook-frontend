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
import "./recipe-key.styles.scss";

const RecipeKey = () => {
  return (
    <div className="key-container">
      <div>
        <div className="single-key">
          <Keto className="key" />
          <span>Keto</span>
        </div>
        <div className="single-key">
          <GlutenFree className="key" />
          <span>Gluten Free</span>
        </div>
        <div className="single-key">
          <DairyFree className="key" />
          <span>Dairy Free</span>
        </div>
        <div className="single-key">
          <Vegetarian className="key" />
          <span>Vegetarian</span>
        </div>
        <div className="single-key">
          <Seafood className="key" />
          <span>Seafood</span>
        </div>
        <div className="single-key">
          <FreezerMeal className="key" />
          <span>Freezer Meal</span>
        </div>
      </div>
      <div>
        <div className="single-key">
          <Paleo className="key" />
          <span>Paleo</span>
        </div>
        <div className="single-key">
          <LowCalorie className="key" />
          <span>Low Calorie</span>
        </div>
        <div className="single-key">
          <Quick className="key" />
          <span>Under 30 Minutes</span>
        </div>
        <div className="single-key">
          <SlowCooker className="key" />
          <span>Slow Cooker</span>
        </div>
        <div className="single-key">
          <InstantPot className="key" />
          <span>Instant Pot</span>
        </div>
        <div className="single-key">
          <AirFryer className="key" />
          <span>Air Fryer</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeKey;
