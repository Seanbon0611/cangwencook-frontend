import React from "react";
import { useSelector } from "react-redux";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import "./shop-header.styles.scss";

const ShopHeader = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  return (
    <div className="shop-header-container">
      <div className="shop-title">
        <h1>Shop</h1>
      </div>
      <div className="shop-options">
        <p className="option">WISHLIST</p>
        <CartIcon className="option" />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default ShopHeader;
