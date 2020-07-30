import React from "react";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/Youtube.svg";
import { ReactComponent as Pinetrest } from "../../assets/icons/Pinterest.svg";
import "./about.styles.scss";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className='bio'>
      <h1>
        Hi, my name is Gwen welcome to my collection of keto-inspired recipes!
      </h1>
      <div className="about-me-pic-container">
        <img
          src="https://storage.cloud.google.com/can-gwen-cook-pics/cgc-about-me.png"
          alt="about-me-pic"
        />
      </div>
      <h2>What is your cooking style?</h2>
      <p>
        I love to call it: Chopped-style Keto Cooking What is Chopped-style Keto
        Cooking? Imagine opening up your refrigerator, freezer, or dry pantry
        and creating delicious food with the ingredients you have. Recipes are
        created with creativity - a ‘Chopped’ style format to transform an
        ingredient which would fit into a keto-inspired\ diet where it is low in
        carbs and sugars but packed with flavor.
      </p>
      <h2>What are some of your favorite recipes?</h2>
      <p>
        I love making Keto-friendly macadamia bread which I can use as a vehicle
        for millennial toast like Smoked Salmon & Avocado macbread toast. One of
        my go-to is an open face shrimp fiesta bowl with lentil rice and
        parmesan cheese. My husband loves the chichiron-breaded chicken parmesan
        baked with your choice of yummy cheese.
      </p>
      <h2>What are you passionate about when you are not cooking?</h2>
      <p>
        Urban hiking with my two dogs, Booki & Sparky. Traveling the world for
        food and mental relaxation. I miss you JAPAN! Hosting music listening
        sessions for my love in EDM and trance. Enjoying the fantastic food
        scene of the San Francisco, Bay Area. Watching short documentaries and
        content to educate myself on the world.
      </p>
      <h1>A.B.C : Always be curious!</h1>
      </div>
      <div className='side-content'>
      <div className='newsletter'>
      <h2>Dont Miss a Recipe</h2>
      <div>
      <input type="searchbar" placeholder='Email' />
      </div>
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

export default AboutPage;
