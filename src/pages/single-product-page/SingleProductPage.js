import React from "react";
import ProductShowcase from "../../components/product-showcase/ProductShowcase";
import ProductDetails from "../../components/product-details/ProductDetails";
import ShopHeader from "../../components/shop-header/ShopHeader";
import "./single-product-page.styles.scss";

const SingleProductPage = ({ item }) => {
  return (
    <div>
      <ShopHeader />
      {item ? (
        <div className="single-product-container">
          <ProductShowcase item={item.attributes} />
          <ProductDetails item={item.attributes} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SingleProductPage;
