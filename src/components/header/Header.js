import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/cgcv2logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";
import Socials from "../socials/Socials";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import "./header.styles.css";
// import MobileDropDown from "../mobile-dropdown/MobileDropDown";

const Header = ({ logOut }) => {
  const [click, setClick] = useState(false);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  if (loggedIn) {
    if (isAdmin) {
      return (
        <div className="header">
          <NavLink onClick={closeMobileMenu} className="logo-container" to="/">
            <Logo />
          </NavLink>
          <div className="nav-options">
            <div className="paths">
              <NavLink onClick={closeMobileMenu} className="option" to="/about">
                Analytics
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="option"
                to="/recipes"
              >
                Recipes
              </NavLink>
              <NavLink onClick={closeMobileMenu} className="option" to="/shop">
                Edit Inventory
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="option"
                to="/admin-blog"
              >
                Blog
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="option"
                onClick={logOut}
                to="/"
              >
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
              <NavLink onClick={closeMobileMenu} className="option" to="/about">
                About
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="option"
                to="/recipes"
              >
                Recipes
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="option"
                to="/account"
              >
                Account
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="option"
                onClick={logOut}
                to="/"
              >
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
        <div className="logo-nav">
          <NavLink onClick={closeMobileMenu} to="/">
            <Logo className="logo" />
          </NavLink>
          <div className={click ? "nav-options active" : "nav-options"}>
            <NavLink className="option" onClick={closeMobileMenu} to="/about">
              About
            </NavLink>
            <NavLink className="option" onClick={closeMobileMenu} to="/recipes">
              Recipes
            </NavLink>
            <NavLink className="option" onClick={closeMobileMenu} to="/shop">
              Shop
            </NavLink>
            <NavLink className="option" onClick={closeMobileMenu} to="/blog">
              Blog
            </NavLink>
            <NavLink
              className="option-mobile"
              onClick={closeMobileMenu}
              to="/signin"
            >
              Sign-In
            </NavLink>
            <NavLink
              className="option-mobile mobile-signup"
              onClick={closeMobileMenu}
              to="/signup"
            >
              Sign Up
            </NavLink>
            <div className="option-mobile">
              <p>Follow Us!</p>
              <Socials />
            </div>
          </div>
        </div>
        <div className="signin-and-up">
          <NavLink className="sign-in" onClick={closeMobileMenu} to="/signin">
            Sign-In
          </NavLink>
          <NavLink
            className="signup-btn"
            onClick={closeMobileMenu}
            to="/signup"
          >
            Sign Up
          </NavLink>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;

// <header className="header">
//   <nav className="nav-options">
//     <NavLink onClick={closeMobileMenu} className="logo" to="/">
//       <Logo className="logo" />
//     </NavLink>
//     <NavLink className="option" to="/about">
//       About
//     </NavLink>
//     <NavLink className="option" to="/recipes">
//       Recipes
//     </NavLink>
//     <NavLink className="option" to="/shop">
//       Shop
//     </NavLink>
//     <NavLink className="option" to="/blog">
//       Blog
//     </NavLink>
//   </nav>
//   <nav className="signin-up">
//     <NavLink className="option" to="/signin">
//       Sign In
//     </NavLink>
//     <NavLink className="option" to="/signup">
//       Sign Up
//     </NavLink>
//   </nav>
// </header>
