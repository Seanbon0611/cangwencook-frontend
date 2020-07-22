import React, { useState, useEffect } from "react";
import VideoCard from "../../components/video-card/VideoCard";
import api from '../../services/api'
import "./videos.styles.scss";

const VideosPage = () => {
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState([]);

useEffect(() => {
  api.youtube
    .recipesPlaylist()
    .then((res) => res.json())
    .then((data) => {
      setVideos(data.items)
      setLoading(false)
    })
}, []);
  return (
    <div>
      <h3>Recipes</h3>
      <div className="videos-container">
        {videos.map((video) => <div>
          {loading ? "Loading..." : <VideoCard key={video.snippet.title} video={video} />}
        </div>)}
      </div>
    </div>
  );
};

export default VideosPage;
