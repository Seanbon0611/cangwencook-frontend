import React from "react";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import { Link } from "react-router-dom";
import { ReactComponent as FooterLogo } from "../../assets/footer-logo.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as Pinetrest } from "../../assets/icons/Pinterest.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p style={{ fontWeight: "600", fontSize: "16px" }}>
        Hey, let's keep it touch
      </p>
      <p style={{ fontWeight: "400", fontSize: "14px" }}>
        Sign up for our newsletter!
      </p>
      <form className="newsletter">
        <NewsletterForm />
      </form>
      <div className="socials">
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
      <div className="links-container">
        <Link className="footer-link" to="/about">
          About
        </Link>
        <Link className="footer-link" to="/blog">
          <p>Blog</p>
        </Link>
        <Link className="footer-link" to="/recipes">
          Recipes
        </Link>
        <Link className="footer-link" to="/recipes">
          Videos
        </Link>
        <Link className="footer-link" to="/recipes">
          Shop
        </Link>
        <Link className="footer-link" to="/recipes">
          Collaborate
        </Link>
        <Link className="footer-link" to="/recipes">
          Feedback
        </Link>
      </div>
      <p className="copywrite">
        Copyright 2020 CanGwenCook. All rights reserved. Terms of use.
      </p>
    </div>
  );
};

export default Footer;
