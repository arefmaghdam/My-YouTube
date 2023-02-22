import YouTube from "react-youtube";
import YouTubeProps from "react-youtube";

const VideoPlayer = () => {
  const onPlayerReady = (YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  });

  const opts = (YouTubeProps["opts"] = {
    height: "485",
    width: "850",
    // playerVars: "https://www.youtube.com/watch?v=6QfN3ghaUfE",
  });

  return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
};

export default VideoPlayer;
