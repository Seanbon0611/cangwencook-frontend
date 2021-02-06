import React, { useEffect } from "react";
import "./about.styles.scss";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";

const AboutPage = ({ recipes }) => {
  const topTwo = recipes.slice(0, 2);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <div className="bio">
        <h1 className="page-title">About Gwen</h1>
        <div className="about-me-pic-container">
          <img
            style={{ width: "189px", height: "189px" }}
            src="https://can-gwen-cook.s3-us-west-1.amazonaws.com/cgc-about-me.png"
            alt="about-me-pic"
          />
        </div>
        <h2 style={{ width: "80vw" }}>Hi, my name is Gwen!</h2>
        <h2>What is your cooking style?</h2>
        <p className="about-p">
          I am an amatuer home cook at heart. CanGwenCook is my way of sharing
          some fun recipes using everyday ingredients which you can pick up at
          your local grocery store.
        </p>
        <h2>Who are you cooking for?</h2>
        <p className="about-p">
          I can honestly say that I am better at cooking for a smaller group of
          4-6 people. The size of my kitchen and cookware are made for a couple
          + a few friends, thus, making massive amounts of food just isn’t going
          to happen.
        </p>
        <p className="about-p">
          Typically, my cooking is focused on a protein and veggie diet with
          minimal carbs.
        </p>
        <p className="about-p">
          When I do cook carbs, I would cook a rice substitute like quinoa or
          chickpea rice or whole wheat pasta.
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
        <p className="about-p">
          We both enjoy our cheddar bay almond flour biscuits for snacks and as
          a substitute for carbs.
        </p>
        <h2>What are you passionate about when you are not cooking?</h2>
        <p className="about-p">
          Urban hiking with my two dogs, Booki & Sparky.
        </p>
        <p className="about-p">
          Traveling the world for food and mental relaxation. I miss you JAPAN!
        </p>
        <p className="about-p">
          Hosting music listening sessions for my love of trance music.
        </p>
        <p className="about-p">
          Watching short documentaries and content to educate myself on the
          world.
        </p>
        <h1>A.B.C : Always be curious!</h1>
      </div>
      <div className="top-recipes">
        <h1>Top Recipes</h1>
        <div className="side-content">
          {topTwo.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
      <div>
        <RecipeCarousel recipes={recipes} />
      </div>
    </div>
  );
};

export default AboutPage;
