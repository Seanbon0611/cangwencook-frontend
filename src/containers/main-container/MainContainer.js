import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import RecipesPage from "../../pages/recipes/Recipes";
import ShopPage from "../../pages/shop/Shop";
import CheckoutPage from "../../pages/checkout/Checkout";
import AboutPage from "../../pages/about/About";
import Blog from "../../pages/blog/Blog";
import SignIn from "../../pages/sign-in/SignIn";
import SignUp from "../../pages/sign-up/SignUp";
import UserPanel from "../user-panel/UserPanel";
import AdminPanel from "../admin-panel/AdminPanel";
import SingleRecipe from "../../pages/single-recipe-page/SingleRecipe";
import SingleProductPage from "../../pages/single-product-page/SingleProductPage";
import api from "../../services/api";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderConfirmation from "../../pages/order-confirmation/OrderConfirmation";
import ForgotPasswordPage from "../../pages/forgot-password/ForgotPassword";
import PasswordResetPage from "../../pages/password-reset/PasswordReset";
import CollaboratePage from "../../pages/collaborate/CollaboratePage";
import NotFound from "../../pages/not-found/NotFound";
import FeedbackPage from "../../pages/feedback/FeedbackPage";
import Spinner from "../../components/spinner/Spinner";
import VideosPage from "../../pages/videos/VideosPage";
const stripePromise = loadStripe(
  "pk_test_51H21vEL37GrW3rTgFD9IYQ3uTzcm66S8GU6ee4khfRinCXNOicIaazI6l0sLxXlwMSdPTvd3Q0aiPTe09XOLE4Gl00snYcwan7"
);

const MainContainer = ({ afterLogin }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const loginError = useSelector((state) => state.user.loginError);
  const firstName = useSelector((state) => state.user.firstName);
  const [products, setProducts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.product
      .getProducts()
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products.data);
      });
  }, []);
  useEffect(() => {
    api.recipes.getRecipes().then((recipesList) => {
      setLoading(false);
      setRecipes(recipesList.recipes.data);
    });
  }, []);
  if (loggedIn) {
    if (isAdmin) {
      return (
        <div>
          <AdminPanel
            firstName={firstName}
            recipes={recipes}
            currentUser={currentUser}
          />
        </div>
      );
    } else {
      return (
        <div>
          <UserPanel
            firstName={firstName}
            recipes={recipes}
            products={products}
            stripePromise={stripePromise}
            currentUser={currentUser}
          />
        </div>
      );
    }
  } else {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage recipes={recipes} loading={loading} />}
          />
          <Route
            path="/shop/:id"
            render={(routerProps) => {
              const itemId = routerProps.match.params.id;
              const item = products.find((product) => {
                return product.id.toString() === itemId;
              });
              return item ? <SingleProductPage item={item} /> : <Spinner />;
            }}
          />
          <Route
            path="/recipes/:id"
            render={(routerProps) => {
              const recipeId = routerProps.match.params.id;
              const recipe = recipes.find((recipe) => {
                return recipe.id.toString() === recipeId;
              });
              return recipe ? <SingleRecipe recipe={recipe} /> : <Spinner />;
            }}
          />

          <Route
            path="/shop"
            render={() => <ShopPage products={products} recipes={recipes} />}
          />
          <Route
            path="/checkout"
            render={() => (
              <Elements stripe={stripePromise}>
                <CheckoutPage />
              </Elements>
            )}
          />
          <Route path="/recipes" render={() => <RecipesPage />} />
          {/* <Route path="/signup" render={() => <SignUp />} /> */}
          <Route path="/blog" render={() => <Blog recipes={recipes} />} />
          <Route
            path="/signin"
            render={() => <SignIn afterLogin={afterLogin} error={loginError} />}
          />
          <Route path="/about" render={() => <AboutPage recipes={recipes} />} />
          <Route path="/orderconfirmation" component={OrderConfirmation} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route
            exact
            path="/password_reset/:token"
            render={(routerProps) => {
              let token = routerProps.match.params.token;
              return <PasswordResetPage token={token} />;
            }}
          />
          <Route
            path="/collaborate"
            render={() => <CollaboratePage recipes={recipes} />}
          />
          <Route
            path="/feedback"
            render={() => <FeedbackPage recipes={recipes} />}
          />
          <Route
            path="/videos"
            render={() => <VideosPage recipes={recipes} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
};

export default MainContainer;
