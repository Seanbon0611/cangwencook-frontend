import React from "react";
import Product from "../../components/product/Product";
import "./shop-styles.scss";

const ShopPage = ({ products }) => {
  return (
    <div>
      <div className="collections-container">
        {products.map((product) => {
          return <Product key={product.attributes.id} product={product.attributes} />;
        })}
      </div>
    </div>
  );
};

export default ShopPage;
