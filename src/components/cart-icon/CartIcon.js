import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartAction";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(toggleCartHidden())}>
      <span className="cart">CART</span>
    </div>
  );
};

export default CartIcon;
