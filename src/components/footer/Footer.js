import React, { useState } from "react";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import CustomButton from "../custom-button/CustomButton";
import { Link } from "react-router-dom";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import api from "../../services/api";
import "./footer.styles.scss";

const Footer = ({ currentPage }) => {
  const [displayThankYou, setDisplayThankYou] = useState(false);
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
          setDisplayThankYou(!displayThankYou);
        }
      });
  };
  return (
    <div className="footer">
      {displayThankYou ? (
        <div>
          <p className="thankyou-txt">Thank you!</p>
          <p className="thankyou-txt">
            Please check your email to confirm entry.
          </p>
          <p className="thankyou-txt">
            If you do not confirm, your entry will not count!
          </p>
        </div>
      ) : (
        <div>
          <p
            style={{
              fontWeight: "600",
              fontSize: "18px",
              paddingBottom: "5px",
            }}
          >
            Win a CanGwenCook Sweater!
          </p>
          <p style={{ fontWeight: "400", fontSize: "14px" }}>
            3 Winners Will Be Selected!
          </p>
          <form className="newsletter" onSubmit={handleSubmit}>
            <NewsletterForm onChange={(e) => setEmail(e.target.value)} />
            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </div>
      )}
      <div className="socials">
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
        Copyright 2021 CanGwenCook. All rights reserved. Terms of use.
      </p>
    </div>
  );
};

export default Footer;
