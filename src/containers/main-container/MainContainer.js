import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import VideosPage from "../../pages/videos/Videos";
import ShopPage from "../../pages/shop/Shop";
import CheckoutPage from "../../pages/checkout/Checkout";
import AboutPage from "../../pages/about/About";
import SigninAndSignup from "../../pages/sign-in-and-sign-up/SigninAndSignup";
import UserPanel from "../user-panel/UserPanel";
import AdminPanel from "../admin-panel/AdminPanel";
import SingleProductPage from '../../pages/single-product-page/SingleProductPage'
import api from "../../services/api";

const MainContainer = ({ loggedIn, loginError, isAdmin, firstName, afterLogin }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.product
      .getProducts()
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
      })
  },[]);

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
          <UserPanel firstName={firstName} products={products}/>
        </div>
      );
    }
  } else {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/videos" render={() => <VideosPage />} />
          <Route path="/shop/:id" render={(routerProps) => {
            const itemId = routerProps.match.params.id
            const item = products.find(product => product.id.toString() === itemId)
            return item ? <SingleProductPage item={item} /> : "Loading..."
          }} />
          <Route path="/shop" render={() => <ShopPage products={products} />} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/signin" render={() => <SigninAndSignup afterLogin={afterLogin} error={loginError}/>} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
};

export default MainContainer;
