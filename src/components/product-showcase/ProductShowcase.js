import React from "react";
import { Button, Typography, Select, MenuItem } from "@material-ui/core";
const ProductShowcase = ({ item }) => {
  return (
    <div className="single-product-container">
      <div className="product-title">
        <Typography variant="h4">{item.name}</Typography>
      </div>
      <div className="product-details">
        <img src={item.image} alt="" />
      </div>
    </div>
  );
};

export default ProductShowcase;
