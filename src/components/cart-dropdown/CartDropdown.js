import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Link to="/checkout">
          <Button variant="contained" color="secondary">
            GO TO CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
