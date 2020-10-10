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
  );
};

export default Footer;
