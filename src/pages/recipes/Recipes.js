import React, { useState, useEffect } from "react";
import RecipeCard from '../../components/recipe-card/RecipeCard'
import VideoCard from "../../components/video-card/VideoCard";
import api from "../../services/api";
import "./recipes.styles.scss";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    api.recipes.getRecipes()
    .then(recipesList => setRecipes(recipesList.recipes.data))
  }, [])

  // useEffect(() => {
  //   api.youtube
  //     .recipesPlaylist()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVideos(data.items);
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <div>
      <h3>Recipes</h3>
      <div className='recipe-cards'>
      {recipes.map(recipe => {return <RecipeCard key={recipe.id} recipe={recipe}/>})}
           </div>
      </div>
      );
    };
    
    export default RecipesPage;
    
    // <div className="videos-container">
    //   {videos.map((video) => (
    //     <div key={video.id}>
    //       {loading ? (
    //         "Loading..."
    //       ) : (
    //         <VideoCard key={video.snippet.title} video={video} />
    //       )}
    //     </div>
    //   ))}
    // </div>