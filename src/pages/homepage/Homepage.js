import React, { useState, useEffect } from "react";
import VideoCard from '../../components/video-card/VideoCard'
import api from '../../services/api'

const Homepage = () => {
  const[loading, setLoading] = useState(true)
  const [videos, setVideos] = useState([]);

useEffect(() => {
  api.youtube
    .getVideos()
    .then((res) => res.json())
    .then((data) => {
      console.log(data.items)
      setVideos(data.items)
      setLoading(false)
    });
}, []);
return (
  
  <div className="homepage">
    <h1>Featured Video:</h1>
    {loading ? "Loading..." : <VideoCard video={videos[0]}/>}
  </div>
)};

export default Homepage;
