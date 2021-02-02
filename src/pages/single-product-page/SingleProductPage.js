import React, { useEffect } from "react";
import ProductShowcase from "../../components/product-showcase/ProductShowcase";
import ProductDetails from "../../components/product-details/ProductDetails";
import ShopHeader from "../../components/shop-header/ShopHeader";
import "./single-product-page.styles.scss";

const SingleProductPage = ({ item, currentOrder }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ShopHeader />
      {item ? (
        <div className="single-product-container">
          <ProductShowcase item={item.attributes} />
          <ProductDetails currentOrder={currentOrder} item={item.attributes} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SingleProductPage;
