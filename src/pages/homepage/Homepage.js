import React from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";
import "./homepage.styles.scss";

const Homepage = ({ recipes }) => {
  const topThree = recipes.slice(0, 3);

  return (
    <div className="homepage">
      <div className="image-container">
        <img
          alt="hero"
          src="https://can-gwen-cook.s3-us-west-1.amazonaws.com/new-hero-image.png"
        />
      </div>
      <h1>Latest Recipes</h1>
      <div className="top-recipes">
        {topThree.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className="top-recipes-mobile">
        <RecipeCarousel recipes={topThree} />
      </div>
    </div>
  );
};

export default Homepage;
