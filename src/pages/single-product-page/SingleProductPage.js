import React from "react";
import ProductShowcase from "../../components/product-showcase/ProductShowcase";
import ProductDetails from "../../components/product-details/ProductDetails";
import "./single-product-page.styles.scss";

const SingleProductPage = ({ item }) => {
  return (
    <div className='single-product-container'>
    <ProductShowcase item={item.attributes} />
    <ProductDetails item={item.attributes} />
    </div>
  );
};

export default SingleProductPage;
