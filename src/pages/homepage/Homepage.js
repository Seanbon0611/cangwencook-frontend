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
          src="https://storage.cloud.google.com/can-gwen-cook-pics/the-new-banner.png"
        />
      </div>
      <h1 variant="h3">Latest Recipes</h1>
      <div className="top-recipes">
        {topThree.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

// {loading ? "Loading..." : <VideoCard video={videos[0]} />}
