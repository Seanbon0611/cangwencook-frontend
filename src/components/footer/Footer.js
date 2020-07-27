import React from "react";
import { Typography } from '@material-ui/core'
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className='logo'>
        <span>Logo here</span>
      </div>
      <div class="section1">
        <Typography>About</Typography>
        <Typography>Our Team</Typography>
        <Typography>Blog</Typography>
      </div>
      <div class="section2">
      <Typography>Food Videos</Typography>
      <Typography>Recipe Index</Typography>
      <Typography>Return Policy</Typography>
      </div>
      <div class="section3">
      <Typography>Shop</Typography>
      <Typography>Advertise</Typography>
      <Typography>Contact</Typography>
      </div>
      <div class="section4">
      <Typography>Subscribe via email</Typography>
      <Typography>Searchbar Here</Typography>
      <Typography>Follow Us</Typography>
      <span>icon</span>
      <span>icon</span>
      <span>icon</span>
      <span>icon</span>
      </div>
    </div>
  );
};

export default Footer;
