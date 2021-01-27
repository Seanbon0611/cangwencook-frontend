import React, { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import Socials from "../../components/socials/Socials";

const FeedbackPage = ({ recipes }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const topTwo = recipes.slice(0, 2);
  const handleSubmit = () => {
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
  };
  return (
    <div className="collaborate-container">
      <div className="title-socials">
        <h1 className="page-title">Feedback</h1>
        <div className="links-to-socials">
          <span style={{ paddingRight: "10px" }}>Follow Us</span>
          <div style={{ width: "128px" }}>
            <Socials />
          </div>
        </div>
      </div>
      <div className="split-content">
        <form>
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
          <FormInput
            label="Message"
            asterisk
            textarea
            onChange={(e) => setMessage(e.target.value)}
          />
          <CustomButton type="submit">Send</CustomButton>
        </form>
        <div className="top-recipes-container">
          <div className="top-recipes-collab">
            <h1 className="page-title">Top Recipes</h1>
            <div className="side-content">
              {topTwo.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
