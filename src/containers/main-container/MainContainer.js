import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import VideosPage from "../../pages/videos/Videos";
import ShopPage from "../../pages/shop/Shop";
import CheckoutPage from "../../pages/checkout/Checkout";
import AboutPage from "../../pages/about/About";

const MainContainer = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/videos" component={VideosPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </div>
);

export default MainContainer;
