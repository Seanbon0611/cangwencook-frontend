import React from "react";
import { Switch, Route } from "react-router-dom";
import RecipesPage from "../../pages/recipes/Recipes";
import NewRecipePage from "../../pages/new-recipe/NewRecipe";
import EditRecipe from "../../pages/edit-recipe/EditRecipe";

const AdminPanel = ({ recipes }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/recipes" component={RecipesPage} />
        <Route
          exact
          path="/recipes/:id/edit"
          render={(routerProps) => {
            const recipeId = routerProps.match.params.id;
            const recipe = recipes.find((recipe) => {
              return recipe.id.toString() === recipeId;
            });
            return recipe ? <EditRecipe recipe={recipe} /> : "Loading...";
          }}
        />
        <Route exact path="/recipes/new" component={NewRecipePage} />
      </Switch>
    </div>
  );
};

export default AdminPanel;
