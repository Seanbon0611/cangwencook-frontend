import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import VideoCard from "../../components/video-card/VideoCard";
import api from "../../services/api";
import "./homepage.styles.scss";

const Homepage = ({ recipes }) => {
  const topThree = recipes.slice(0, 3);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.youtube
      .getVideos()
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      });
  }, []);
  return (
    <div className="homepage">
      <div className="image-container">
        <img src="https://storage.cloud.google.com/can-gwen-cook-pics/the-new-banner.png" />
      </div>
      <h1 variant="h3">Latest Recipes</h1>
      <div className="top-recipes">
        {topThree.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

// {loading ? "Loading..." : <VideoCard video={videos[0]} />}
