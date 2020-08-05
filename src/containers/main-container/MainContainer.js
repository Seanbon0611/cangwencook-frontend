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
import SingleRecipe from "../../pages/single-recipe-page/SingleRecipe";
import SingleProductPage from "../../pages/single-product-page/SingleProductPage";
import api from "../../services/api";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderConfirmation from "../../pages/order-confirmation/OrderConfirmation";
const stripePromise = loadStripe(
  "pk_test_51H21vEL37GrW3rTgFD9IYQ3uTzcm66S8GU6ee4khfRinCXNOicIaazI6l0sLxXlwMSdPTvd3Q0aiPTe09XOLE4Gl00snYcwan7"
);

const MainContainer = ({
  loggedIn,
  loginError,
  isAdmin,
  firstName,
  afterLogin,
  currentUser,
  currentOrder,
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
            stripePromise={stripePromise}
            currentUser={currentUser}
            currentOrder={currentOrder}
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
          <Route
            path="/checkout"
            render={() => (
              <Elements stripe={stripePromise}>
                <CheckoutPage />
              </Elements>
            )}
          />
          <Route path="/recipes" render={() => <RecipesPage />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route
            path="/signin"
            render={() => <SignIn afterLogin={afterLogin} error={loginError} />}
          />
          <Route path="/about" render={() => <AboutPage recipes={recipes} />} />
          <Route path="/orderconfirmation" component={OrderConfirmation} />
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
