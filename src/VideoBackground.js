import './VideoBackground.css';

const VIDEO_EMBED_ID = "1jzROE6EhxM";
const WIDTH = 1920;
const HEIGHT = 1080;

const VideoBackground = () => {
  return (
    <div className="video-background">
      <iframe
        width={WIDTH}
        height={HEIGHT}
        src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&disablekb=1&start=50&enablejsapi=1&&widgetid=3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />    
    </div>
  )

}

export default VideoBackground;