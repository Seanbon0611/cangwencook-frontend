import React from "react";
import "./product-showcase.styles.scss";
import { Button, Typography, Select, MenuItem } from "@material-ui/core";
const ProductShowcase = ({ item }) => {
  return (
    <div className="product-showcase-container">
      <Typography variant="h4">{item.name}</Typography>
        <img src={item.image} alt="" />
    </div>
  );
};

export default ProductShowcase;
