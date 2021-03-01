import React, { useState, useEffect } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import FormInput from "../../components/form-input/FormInput";
import Socials from "../../components/socials/Socials";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";
import "./collaborate.styles.scss";
import api from "../../services/api";

const CollaboratePage = ({ recipes, setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setCurrentPage("8");
    return () => setCurrentPage("");
  }, []);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const topTwo = recipes.slice(0, 2);
  const topThree = recipes.slice(0, 3);
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        accept: "Application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    };
    api.collaborate.addCollaborate(config).then(console.log);
  };
  return (
    <div className="collaborate-container">
      <div className="title-socials">
        <h1 className="page-title">Collaborate</h1>
        <div className="links-to-socials">
          <span style={{ paddingRight: "10px" }}>Follow Us</span>
          <div style={{ width: "128px" }}>
            <Socials />
          </div>
        </div>
      </div>
      <div className="split-content">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            asterisk
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            label="Email Address"
            asterisk
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="collab-textarea">
            <label style={{ padding: "0px 0px 10px 0px" }}>Message*</label>
            <textarea
              style={{ border: "0.75px solid #303030" }}
              cols={30}
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <CustomButton type="submit">Send</CustomButton>
        </form>
        <div className="top-recipes-container">
          <div className="top-recipes-collab">
            <h1 className="page-title">Latest Recipes</h1>
            <div className="side-content">
              {topTwo.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="top-recipes-mobile">
        <h1 className="page-title">Latest Recipes</h1>
        <RecipeCarousel recipes={topThree} />
      </div>
    </div>
  );
};

export default CollaboratePage;
