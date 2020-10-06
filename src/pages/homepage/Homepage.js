import React from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import "./homepage.styles.scss";

const Homepage = ({ recipes }) => {
  const topThree = recipes.slice(0, 3);

  return (
    <div className="homepage">
      <div className="image-container">
        <img
          alt="hero"
          src="https://storage.googleapis.com/can-gwen-cook-pics/iStock-1046086606-1%202.png"
        />
        <div class="motto">
          <p>Chopped-Inspired Recipes</p> for your active lifestyle
        </div>
      </div>
      <h1>Latest Recipes</h1>
      <div className="top-recipes">
        {topThree.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
