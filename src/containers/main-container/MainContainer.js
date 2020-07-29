import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import RecipesPage from "../../pages/recipes/Recipes";
import ShopPage from "../../pages/shop/Shop";
import CheckoutPage from "../../pages/checkout/Checkout";
import AboutPage from "../../pages/about/About";
import SignIn from "../../pages/sign-in/SignIn";
import SignUp from "../../pages/sign-up/SignUp";
import UserPanel from "../user-panel/UserPanel";
import AdminPanel from "../admin-panel/AdminPanel";
import SingleProductPage from "../../pages/single-product-page/SingleProductPage";
import api from "../../services/api";
import SingleRecipe from "../../pages/single-recipe-page/SingleRecipe";

const MainContainer = ({
  loggedIn,
  loginError,
  isAdmin,
  firstName,
  afterLogin,
}) => {
  const [products, setProducts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    api.product
      .getProducts()
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products.data);
      });
  }, []);
  useEffect(() => {
    api.recipes
      .getRecipes()
      .then((recipesList) => setRecipes(recipesList.recipes.data));
  }, []);
  if (loggedIn) {
    if (isAdmin) {
      return (
        <div>
          <AdminPanel firstName={firstName} />
        </div>
      );
    } else {
      return (
        <div>
          <UserPanel
            firstName={firstName}
            recipes={recipes}
            products={products}
          />
        </div>
      );
    }
  } else {
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
              return item ? <SingleProductPage item={item} /> : "Loading...";
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
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/recipes" render={() => <RecipesPage />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route
            path="/signin"
            render={() => <SignIn afterLogin={afterLogin} error={loginError} />}
          />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
};

export default MainContainer;

// const getData = () => {
//   return (dispatch) => {
//     api.product
//       .getProducts()
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch({
//           type: "FETCH_PRODUCTS",
//           payload: json.products.data,
//         });
//       });
//   };
// };
// const dispatch = useDispatch();
// const products = useSelector((state) => state.shop.products.payload);

// useEffect(() => {
//   dispatch(getData());
// }, []);
