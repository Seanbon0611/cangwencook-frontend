import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/homepage/Homepage";
import VideosPage from "../../pages/videos/Videos";
import ShopPage from "../../pages/shop/Shop";
import CheckoutPage from "../../pages/checkout/Checkout";
import AboutPage from "../../pages/about/About";
import SingleProductPage from "../../pages/single-product-page/SingleProductPage";

const UserPanel = ({ firstName, products }) => {
  return (
    <div>
    <h3>{`Hello ${firstName}(User)`}</h3>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/videos" render={() => <VideosPage />} />
        <Route path="/shop/:id" render={(routerProps) => {
          const itemId = routerProps.match.params.id
          const item = products.find(product => product.id.toString() === itemId)
          return item ? <SingleProductPage item={item} /> : "Loading..."
        }} />
        <Route exact path="/shop" render={() => <ShopPage products={products} />} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
};

export default UserPanel;
