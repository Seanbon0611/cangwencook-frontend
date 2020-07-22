import React from "react";
import { Link } from "react-router-dom";
// import hoodie from "../../assets/product-imgs/sweaterneck1.png";
import "./product.styles.scss";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/shop/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>
      <div className="collection-footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
