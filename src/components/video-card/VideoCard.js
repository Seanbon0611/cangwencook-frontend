import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <div>
    <h1>{video.snippet.title}</h1>
    <iframe key={video.id} width="480px" height="360px" title={video.snippet.title} src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  )
}

export default VideoCard
