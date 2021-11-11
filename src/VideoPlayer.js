import React from 'react';
import './VideoPlayer.css';
import demoVideo from './assets/vid/SolPerHeros_movie.mp4';

{/* <iframe
  width={WIDTH}
  height={HEIGHT}
  src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&disablekb=1&start=50&enablejsapi=1&&widgetid=3"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/>     */}

const VideoPlayer = () => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    isLoading
    ?
    <div className="video-background">

    </div>
    :
    <div className="video-background">
      <video 
        src={demoVideo}
        className="video"
        autoplay="true"
        loop="true"
        muted 
        onLoad={() => setLoading(true)}
      />
    </div>
  )
}

export default VideoPlayer;