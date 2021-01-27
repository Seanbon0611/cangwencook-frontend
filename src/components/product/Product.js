import React from "react";
import { Link } from "react-router-dom";
// import hoodie from "../../assets/product-imgs/sweaterneck1.png";
import "./product.styles.scss";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="collection-footer">
        <span className="name">{product.name}</span>
      </div>
    </div>
  );
};

export default Product;
