import React, { useEffect, useState } from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";
import Spinner from "../../components/spinner/Spinner";
import "./homepage.styles.scss";

const Homepage = ({ recipes }) => {
  const [loading, setLoading] = useState(true);
  recipes.length > 0 && setLoading(false);
  const topThree = recipes.slice(0, 3);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage">
      <div className="image-container">
        <div className="img-bg">
          <div className="slogan">
            <p>Healthy Recipes for</p>
            <p>Your Active Lifestyle</p>
          </div>
        </div>
      </div>
      <h1 className="latest-recipes">Latest Recipes</h1>
      <div className="top-recipes">
        {topThree.map((recipe) =>
          loading ? <Spinner /> : <RecipeCard key={recipe.id} recipe={recipe} />
        )}
      </div>
      <div className="top-recipes-mobile">
        <RecipeCarousel recipes={topThree} />
      </div>
    </div>
  );
};

export default Homepage;
