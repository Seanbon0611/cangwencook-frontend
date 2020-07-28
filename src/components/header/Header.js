import React from "react";
import { ReactComponent as Logo } from "../../assets/can-gwen-cook-logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as Pinetrest } from "../../assets/icons/Pinterest.svg";
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
            <Logo />
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
            <Logo />
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
          <Logo />
        </NavLink>
        <div className="nav-options">
          <div className="utilities">
            <form onSubmit={handleSubmit}>
              <FormInput type="search" placeholder="Search" name="search" />
            </form>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/gwen.kong.9"
            >
              <Facebook />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cangwencook/"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href='href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg"'
            >
              <Youtube />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/gwen.kong.9"
            >
              <Pinetrest />
            </a>
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
