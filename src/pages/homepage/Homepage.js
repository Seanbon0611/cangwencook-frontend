import React from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import "./homepage.styles.scss";

const Homepage = ({ recipes }) => {
  const topThree = recipes.slice(0, 3);

  return (
    <div className="homepage">
      <div className="image-container">
        <img
          alt="home"
          src="https://storage.googleapis.com/can-gwen-cook-pics/the-new-banner.png"
        />
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
