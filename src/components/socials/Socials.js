import React from "react";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import "./socials.styles.scss";

const Socials = () => {
  return (
    <>
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
    </>
  );
};

export default Socials;
