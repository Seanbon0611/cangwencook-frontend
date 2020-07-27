import React from "react";
import logo from "../../assets/cgc-logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import FormInput from "../form-input/FormInput";
import "./header.styles.scss";

const Header = ({ loggedIn, loginError, isAdmin, firstName, logOut }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          <div className="utilities">
            <form onSubmit={handleSubmit}>
              <FormInput type="search" placeholder="Search" name="search" />
            </form>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg"
            >
              youtube
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="httas://www.instagram.com/cangwencook/"
            >
              insta
            </a>
            <a href=''>icon</a>
            <a href=''>icon</a>
          </div>
          <div className="paths">
            <NavLink className="option" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="option" to="/recipes">
              RECIPES
            </NavLink>
            <NavLink className="option" to="/shop">
              SHOP
            </NavLink>
            <NavLink className="option" to="/signin">
              SIGN-IN
            </NavLink>
            <NavLink className="option" to="/signup">
              <CustomButton className="sign-up-btn">SIGN-UP</CustomButton>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;

// <CartIcon className="option" />
// {hidden ? null : <CartDropdown />}
