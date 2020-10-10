import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/can-gwen-cook-logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import "./header.styles.scss";

const Header = ({ logOut }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  if (loggedIn) {
    if (isAdmin) {
      return (
        <div className="header">
          <NavLink className="logo-container" to="/">
            <Logo />
          </NavLink>
          <div className="nav-options">
            <div className="paths">
              <NavLink className="option" to="/about">
                Analytics
              </NavLink>
              <NavLink className="option" to="/recipes">
                Recipes
              </NavLink>
              <NavLink className="option" to="/shop">
                Edit Inventory
              </NavLink>
              <NavLink className="option" to="/admin-blog">
                Blog
              </NavLink>
              <NavLink className="option" onClick={logOut} to="/">
                Sign Out
              </NavLink>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="nav-options">
            <div className="utilities">
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
            </div>
            <div className="paths">
              <NavLink className="option" to="/about">
                About
              </NavLink>
              <NavLink className="option" to="/recipes">
                Recipes
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
      <nav className="header">
        <div className="nav-options">
          <NavLink className="logo" to="/">
            <Logo className="logo" />
          </NavLink>
          <NavLink className="option" to="/about">
            About
          </NavLink>
          <NavLink className="option" to="/recipes">
            Recipes
          </NavLink>
          <NavLink className="option" to="/blog">
            Blog
          </NavLink>
        </div>
        <div className="signin-and-up">
          <NavLink className="option" to="/signin">
            Sign-In
          </NavLink>
          <NavLink className="signup-btn" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Header;

// <NavLink className="logo-container" to="/">
// <Logo />
// </NavLink>

// <div className="utilities">
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.facebook.com/gwen.kong.9"
//             >
//               <Facebook className="social" />
//             </a>
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.instagram.com/cangwencook/"
//             >
//               <Instagram className="social" />
//             </a>
//             <a
//               target="_blank"
//               rel="noopener noreferrer"
//               href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg"
//             >
//               <Youtube className="social" />
//             </a>
//           </div>
