import YouTube from "react-youtube";
import YouTubeProps from "react-youtube";
import style from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  const onPlayerReady = (YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  });

  const opts = (YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    // playerVars: "https://developers.google.com/youtube/player_parameters",
  });

  return (
    <div className={style.videoStyle}>
      <YouTube videoId="6QfN3ghaUfE" opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default VideoPlayer;
