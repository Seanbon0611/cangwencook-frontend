import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  return (
    <div className="checkout-item-container">
      <div>
        <img className="checkout-img" src={item.image} alt="" />
      </div>
      <div className="checkout-item-details">
        <p>{item.name}</p>
        <p>Size: M</p>
        <p>{item.quantity}</p>
        <p>${item.price}</p>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
