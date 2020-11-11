import React, { useEffect } from "react";
import "./about.styles.scss";
import RecipeCard from "../../components/recipe-card/RecipeCard";

const AboutPage = ({ recipes }) => {
  const topTwo = recipes.slice(0, 2);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <div className="bio">
        <h1>About Gwen</h1>
        <div className="about-me-pic-container">
          <img
            style={{ width: "189px", height: "189px" }}
            src="https://can-gwen-cook.s3-us-west-1.amazonaws.com/cgc-about-me.png"
            alt="about-me-pic"
          />
        </div>
        <h2 style={{ width: "80vw" }}>
          Hi, my name is Gwen. Welcome to my collection of recipes for your
          active lifestyle!
        </h2>
        <h2>What is your cooking style?</h2>
        <p className="about-p">I love to call it: Chopped-style Keto Cooking</p>
        <h2>What is Chopped-style Keto Cooking?</h2>
        <p className="about-p">
          Imagine opening up your refrigerator, freezer, or dry pantry and
          creating delicious food with the ingredients you have.
        </p>
        <p className="about-p">
          Recipes are created with creativity - a ‘Chopped’ style format to
          transform an ingredient which would fit into a keto-inspired\ diet
          where it is low in carbs and sugars but packed with flavor.
        </p>
        <h2>What are some of your favorite recipes?</h2>
        <p className="about-p">
          I love making Keto-friendly macadamia bread which I can use as a
          vehicle for millennial toast like Smoked Salmon & Avocado macbread
          toast.
        </p>
        <p className="about-p">
          One of my go-to is an open face shrimp fiesta bowl with lentil rice
          and parmesan cheese.
        </p>
        <p className="about-p">
          {" "}
          My husband loves the chichiron-breaded chicken parmesan baked with
          your choice of yummy cheese.
        </p>
        <h2>What are you passionate about when you are not cooking?</h2>
        <p className="about-p">
          Urban hiking with my two dogs, Booki & Sparky.
        </p>
        <p className="about-p">
          Traveling the world for food and mental relaxation. I miss you JAPAN!
        </p>
        <p className="about-p">
          Hosting music listening sessions for my love in EDM and trance.
        </p>
        <p className="about-p">
          Enjoying the fantastic food scene of the San Francisco, Bay Area.
        </p>
        <p className="about-p">
          Watching short documentaries and content to educate myself on the
          world.
        </p>
        <h1>A.B.C : Always be curious!</h1>
      </div>
      <div className="side-content">
        <div className="top-recipes">
          <h1>Top Recipes</h1>
          {topTwo.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
