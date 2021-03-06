import React, { useState } from "react";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import api from "../../services/api";
import "./footer.styles.scss";

const Footer = ({ currentPage }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Config to create new active record contact
    const contactConfig = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    };
    //HTTP request to create a n ew Contact within Active Campaign
    const newContact = await api.activeCampaign
      .newContact(contactConfig)
      .then((data) => {
        if (data.response.errors) {
          setError(data.response.errors.error);
        } else {
          //Once Contact has been created, associate this contact with a tag based on the current page
          const addTagConfig = {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contact: data.response.contact.id,
              tag: currentPage,
            }),
          };
          api.activeCampaign.addTagToContact(addTagConfig).then((data) => {
            if (data.response.errors) {
              setError(data.response.errors.title);
            }
          });
        }
      });
  };
  return (
    <div className="footer">
      <p style={{ fontWeight: "600", fontSize: "18px", paddingBottom: "5px" }}>
        Hey, let's keep in touch!
      </p>
      <p style={{ fontWeight: "400", fontSize: "14px" }}>
        Sign up for our newsletter!
      </p>
      <form className="newsletter" onSubmit={handleSubmit}>
        <NewsletterForm onChange={(e) => setEmail(e.target.value)} />
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
        <Link className="footer-link" to="/videos">
          Videos
        </Link>
        <Link className="footer-link" to="/shop">
          Shop
        </Link>
        <Link className="footer-link" to="/collaborate">
          Collaborate
        </Link>
        <Link className="footer-link" to="/feedback">
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
