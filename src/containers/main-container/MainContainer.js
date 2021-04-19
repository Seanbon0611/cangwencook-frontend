import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import RecipesPage from "../../pages/recipes/Recipes";
import ShopPage from "../../pages/shop/Shop";
import AboutPage from "../../pages/about/About";
import Blog from "../../pages/blog/Blog";
import SignIn from "../../pages/sign-in/SignIn";
import AdminPanel from "../admin-panel/AdminPanel";
import SingleRecipe from "../../pages/single-recipe-page/SingleRecipe";
import SingleProductPage from "../../pages/single-product-page/SingleProductPage";
import api from "../../services/api";
import ForgotPasswordPage from "../../pages/forgot-password/ForgotPassword";
import PasswordResetPage from "../../pages/password-reset/PasswordReset";
import CollaboratePage from "../../pages/collaborate/CollaboratePage";
import NotFound from "../../pages/not-found/NotFound";
import FeedbackPage from "../../pages/feedback/FeedbackPage";
import Spinner from "../../components/spinner/Spinner";
import VideosPage from "../../pages/videos/VideosPage";
import EggBlog from "../../blogs/egg-blog/EggBlog";
import { blogs } from "../../blogs";

const MainContainer = ({ afterLogin, setCurrentPage }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const loginError = useSelector((state) => state.user.loginError);
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
      setRecipes(recipesList.recipes.data);
      setLoading(false);
    });
  }, []);

  if (loggedIn) {
    if (isAdmin) {
      return (
        <div>
          <AdminPanel recipes={recipes} currentUser={currentUser} />
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
            render={() => (
              <HomePage
                recipes={recipes}
                loading={loading}
                setCurrentPage={setCurrentPage}
              />
            )}
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
              return recipe ? (
                <SingleRecipe recipe={recipe} setCurrentPage={setCurrentPage} />
              ) : (
                <Spinner />
              );
            }}
          />

          <Route
            path="/shop"
            render={() => (
              <ShopPage
                products={products}
                recipes={recipes}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            path="/recipes"
            render={() => <RecipesPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            exact
            path="/blog"
            render={() => (
              <Blog recipes={recipes} setCurrentPage={setCurrentPage} />
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <SignIn
                afterLogin={afterLogin}
                error={loginError}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <AboutPage recipes={recipes} setCurrentPage={setCurrentPage} />
            )}
          />
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
            render={() => (
              <CollaboratePage
                recipes={recipes}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            path="/feedback"
            render={() => (
              <FeedbackPage recipes={recipes} setCurrentPage={setCurrentPage} />
            )}
          />
          <Route
            path="/videos"
            render={() => (
              <VideosPage recipes={recipes} setCurrentPage={setCurrentPage} />
            )}
          />
          <Route
            exact
            path="/blog/:path"
            render={(routerProps) => {
              const blogTitle = routerProps.match.params.path;
              switch (blogTitle) {
                case "egg-blog":
                  return <EggBlog />;

                default:
                  return <NotFound />;
              }
            }}
          />
          <Route render={() => <NotFound setCurrentPage={setCurrentPage} />} />
        </Switch>
      </div>
    );
  }
};

export default MainContainer;
