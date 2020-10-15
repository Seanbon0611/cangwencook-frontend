import React, { useState, useEffect } from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import api from "../../services/api";
import "./recipes.styles.scss";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleDelete = (id) => {
    const data = {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    api.recipes.deleteRecipe(id, data).then((json) => console.log(json));
  };

  useEffect(() => {
    api.recipes
      .getRecipes()
      .then((recipesList) => setRecipes(recipesList.recipes.data));
  }, []);

  return (
    <div className="recipe-container">
      <div className="recipe-header-container">
        <h1 className="recipe-header">Recipes</h1>
      </div>
      <div className="recipe-cards">
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              handleDelete={handleDelete}
              recipe={recipe}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecipesPage;
