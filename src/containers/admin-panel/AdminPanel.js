import React from "react";
import { Switch, Route } from "react-router-dom";
import RecipesPage from "../../pages/recipes/Recipes";

const AdminPanel = ({ firstName, recipes }) => {
  return (
    <div>
      <Switch>
        <Route path="/recipes" component={RecipesPage} />
      </Switch>
    </div>
  );
};

export default AdminPanel;
