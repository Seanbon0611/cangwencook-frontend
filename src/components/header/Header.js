import React from "react";
import logo from "../../assets/cgc-logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import "./header.styles.scss";

const Header = ({ loggedIn, loginError, isAdmin, firstName, logOut }) => {
  const hidden = useSelector((state) => state.cart.hidden);
  if (loggedIn) {
    if (isAdmin) {
      return (
        <div className="header">
          <NavLink className="logo-container" to="/">
            <img alt="logo" src={logo} className="logo" />
          </NavLink>
          <div className="nav-options">
            <NavLink className="option" to="/about">
              ANALYTICS
            </NavLink>
            <NavLink className="option" to="/videos">
              RECIPES
            </NavLink>
            <NavLink className="option" to="/shop">
              EDIT INVENTORY
            </NavLink>
            <NavLink className="option" onClick={logOut} to="/">
              SIGNOUT
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <NavLink className="logo-container" to="/">
            <img alt="logo" src={logo} className="logo" />
          </NavLink>
          <div className="nav-options">
            <NavLink className="option" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="option" to="/videos">
              RECIPES
            </NavLink>
            <NavLink className="option" to="/shop">
              SHOP
            </NavLink>
            <NavLink className="option" onClick={logOut} to="/">
              SIGNOUT
            </NavLink>
            <CartIcon />
            {hidden ? null : <CartDropdown />}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="header">
        <NavLink className="logo-container" to="/">
          <img alt="logo" src={logo} className="logo" />
        </NavLink>
        <div className="nav-options">
          <NavLink className="option" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="option" to="/videos">
            RECIPES
          </NavLink>
          <NavLink className="option" to="/shop">
            SHOP
          </NavLink>
          <NavLink className="option" to="/signin">
            SIGN-IN
          </NavLink>

          <CartIcon className='option'/>
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
    );
  }
};

export default Header;
