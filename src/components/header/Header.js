import React from "react";
import { ReactComponent as Logo } from "../../assets/can-gwen-cook-logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as Pinetrest } from "../../assets/icons/Pinterest.svg";
import { NavLink } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./header.styles.scss";

const Header = ({ loggedIn, loginError, isAdmin, firstName, logOut }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
            <div className="utilities">
              <form onSubmit={handleSubmit}>
                <div className="searchbar-container">
                  <FormInput
                    style={{ width: "350px" }}
                    type="search"
                    placeholder="Search"
                    name="search"
                  />
                </div>
              </form>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/gwen.kong.9"
              >
                <Facebook className="social" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/cangwencook/"
              >
                <Instagram className="social" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg"
              >
                <Youtube className="social" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/gwen.kong.9"
              >
                <Pinetrest className="social" />
              </a>
            </div>
            <div className="paths">
              <NavLink className="option" to="/about">
                About
              </NavLink>
              <NavLink className="option" to="/recipes">
                Recipes
              </NavLink>
              <NavLink className="option" to="/shop">
                Shop
              </NavLink>
              <NavLink className="option" to="/account">
                Account
              </NavLink>
              <NavLink className="option" onClick={logOut} to="/">
                <CustomButton>Signout</CustomButton>
              </NavLink>
            </div>
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
              <div className="searchbar-container">
                <FormInput
                  style={{ width: "350px" }}
                  type="search"
                  placeholder="Search"
                  name="search"
                />
              </div>
            </form>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/gwen.kong.9"
            >
              <Facebook className="social" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/cangwencook/"
            >
              <Instagram className="social" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg"
            >
              <Youtube className="social" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/gwen.kong.9"
            >
              <Pinetrest className="social" />
            </a>
          </div>
          <div className="paths">
            <NavLink className="option" to="/about">
              About
            </NavLink>
            <NavLink className="option" to="/recipes">
              Recipes
            </NavLink>
            <NavLink className="option" to="/shop">
              Shop
            </NavLink>
            <NavLink className="option" to="/signin">
              Sign-In
            </NavLink>
            <NavLink className="option" to="/signup">
              <CustomButton className="sign-up-btn">Sign-Up</CustomButton>
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
//<span>{`Welcome ${firstName}`}</span>
