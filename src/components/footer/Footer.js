import React from "react";
import { Typography } from "@material-ui/core";
import { ReactComponent as FooterLogo } from "../../assets/footer-logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as Pinetrest } from "../../assets/icons/Pinterest.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <FooterLogo className="footer-logo" />
      </div>
      <div className="section">
        <Typography>About</Typography>
        <Typography>Our Team</Typography>
        <Typography>Blog</Typography>
      </div>
      <div className="section">
        <Typography>Food Videos</Typography>
        <Typography>Recipe Index</Typography>
        <Typography>Return Policy</Typography>
      </div>
      <div className="section">
        <Typography>Shop</Typography>
        <Typography>Advertise</Typography>
        <Typography>Contact</Typography>
      </div>
      <div className="section">
        <Typography variant='h5'>Subscribe via email</Typography>
        <input type="searchbar" placeholder='Email' />
        <Typography variant='h5'>Follow Us</Typography>
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
    </div>
  );
};

export default Footer;
