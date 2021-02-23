import React, { useState, useEffect } from "react";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import LazyLoad from "react-lazyload";
import api from "../../services/api";
import "./recipes.styles.scss";
import Spinner from "../../components/spinner/Spinner";

const RecipesPage = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setCurrentPage("4");
    return () => setCurrentPage("");
  }, []);

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

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
    api.recipes.getRecipes().then((recipesList) => {
      setRecipes(recipesList.recipes.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="recipe-container">
      <div className="recipe-header-container">
        <h1 className="recipe-header">Recipes</h1>
      </div>
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <LazyLoad
            key={recipe.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <RecipeCard
              key={recipe.id}
              handleDelete={handleDelete}
              recipe={recipe}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
