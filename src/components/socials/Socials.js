import React from "react";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import "./socials.styles.scss";

const Socials = () => {
  return (
    <div>
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
  );
};

export default Socials;
