import React, { useState, useEffect } from "react";
import VideoCard from "../../components/video-card/VideoCard";
import api from "../../services/api";

const Homepage = () => {
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
      <h3>Featured Video:</h3>
      {loading ? "Loading..." : <VideoCard video={videos[0]} />}
    </div>
  );
};

export default Homepage;
