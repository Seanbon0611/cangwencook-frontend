import React from "react";
import logo from "../../assets/cgc-logo.png";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <NavLink className="logo-container" to="/">
        <img src={logo} className="logo" />
      </NavLink>
      <div className="nav-options">
        <NavLink className="option" to="/about">
          About
        </NavLink>
        <NavLink className="option" to="/videos">
          Videos
        </NavLink>
        <NavLink className="option" to="/shop">
          Shop
        </NavLink>
        <NavLink className="option" to="/contact">
          Contact
        </NavLink>
        <span>cart icon here</span>
      </div>
    </div>
  );
};

export default Header;
