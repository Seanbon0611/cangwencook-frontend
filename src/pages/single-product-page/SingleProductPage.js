import React from "react";
import ProductShowcase from "../../components/product-showcase/ProductShowcase";
import ProductDetails from "../../components/product-details/ProductDetails";
import "./single-product-page.styles.scss";

const SingleProductPage = ({ item }) => {
  return (
    <div>
      <ProductShowcase item={item} />
      <ProductDetails item={item} />
    </div>
  );
};

export default SingleProductPage;
