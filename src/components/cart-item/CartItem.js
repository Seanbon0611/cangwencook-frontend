import React from "react";
import { span } from "@material-ui/core";
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt="item" />
      <div class="item-details">
        <span variant="body1" className="name">
          {item.name}
        </span>
        <span variant="body1" className="price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
