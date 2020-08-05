import React, { useState, useEffect } from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import api from "../../services/api";
import "./recipes.styles.scss";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.recipes
      .getRecipes()
      .then((recipesList) => setRecipes(recipesList.recipes.data));
  }, []);

  return (
    <div className="recipe-container">
      <div className="recipe-header-container">
        <h1 className="recipe-header">Recipes</h1>
        <div className="filters">
          <span>Filter</span>
          <span>Sort By</span>
        </div>
      </div>
      <div className="recipe-cards">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default RecipesPage;
