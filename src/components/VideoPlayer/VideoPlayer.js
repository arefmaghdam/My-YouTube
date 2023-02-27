import YouTube from "react-youtube";
import YouTubeProps from "react-youtube";

const VideoPlayer = () => {
  const onPlayerReady = (YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  });

  const opts = (YouTubeProps["opts"] = {
    height: "485",
    width: "850",
    // playerVars: "https://developers.google.com/youtube/player_parameters",
  });

  return <YouTube videoId="6QfN3ghaUfE" opts={opts} onReady={onPlayerReady} />;
};

export default VideoPlayer;
