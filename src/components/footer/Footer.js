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
      <div className="logo">
        <FooterLogo className="footer-logo" />
      </div>
      <div className="section">
        <Link className="footer-link" to="/about">
          About
        </Link>
        <p>Our Team</p>
        <p>Blog</p>
      </div>
      <div className="section">
        <a
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC7s6USfYN4-_Wk6roCXtdjg"
        >
          Food Videos
        </a>
        <p>
          <Link className="footer-link" to="/recipes">
            Recipe Index
          </Link>
        </p>
        <p>Return Policy</p>
      </div>
      <div className="section">
        <p>Shop</p>
        <p>Advertise</p>
        <p>Contact</p>
      </div>
      <div className="section">
        <h3>Subscribe via email</h3>
        <form
          method="POST"
          action="https://na1595191147.activehosted.com/proc.php"
        >
          <NewsletterForm />
        </form>
        <h3>Follow Us</h3>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/gwen.kong.9"
          >
            <Pinetrest className="social" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
