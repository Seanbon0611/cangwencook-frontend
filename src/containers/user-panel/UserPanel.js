import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import ShopPage from "../../pages/shop/Shop";
import CheckoutPage from "../../pages/checkout/Checkout";
import RecipesPage from "../../pages/recipes/Recipes";
import AboutPage from "../../pages/about/About";
import SingleProductPage from "../../pages/single-product-page/SingleProductPage";
import SingleRecipe from "../../pages/single-recipe-page/SingleRecipe";
import AccountPage from "../../pages/account/Account";
import OrderConfirmation from "../../pages/order-confirmation/OrderConfirmation";
import { Elements } from "@stripe/react-stripe-js";

const UserPanel = ({
  firstName,
  products,
  recipes,
  stripePromise,
  currentUser,
  currentOrder,
}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <HomePage recipes={recipes} />} />
        <Route
          path="/shop/:id"
          render={(routerProps) => {
            const itemId = routerProps.match.params.id;
            const item = products.find((product) => {
              return product.id.toString() === itemId;
            });
            return item ? (
              <SingleProductPage item={item} currentOrder={currentOrder} />
            ) : (
              "Loading..."
            );
          }}
        />
        <Route
          path="/recipes/:id"
          render={(routerProps) => {
            const recipeId = routerProps.match.params.id;
            const recipe = recipes.find((recipe) => {
              return recipe.id.toString() === recipeId;
            });
            return recipe ? <SingleRecipe recipe={recipe} /> : "Loading...";
          }}
        />
        <Route path="/shop" render={() => <ShopPage products={products} />} />
        <Route
          path="/checkout"
          render={() => (
            <Elements stripe={stripePromise}>
              <CheckoutPage currentUser={currentUser} />
            </Elements>
          )}
        />
        <Route path="/recipes" render={() => <RecipesPage />} />
        <Route path="/about" render={() => <AboutPage recipes={recipes} />} />
        <Route path="/account" component={AccountPage} />
        <Route path="/orderconfirmation" component={OrderConfirmation} />
      </Switch>
    </div>
  );
};

export default UserPanel;
