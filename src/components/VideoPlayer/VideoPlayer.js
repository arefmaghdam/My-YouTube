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
    <>
      <div className={style.videoStyle}>
        <YouTube videoId="6QfN3ghaUfE" opts={opts} onReady={onPlayerReady} />
      </div>
      <div className={style.videoCaption}>
        <h5>React & Redux Learning crash course</h5>
        <div className={style.flexContainer}>
          <div className={style.item1}>profile</div>
          <div className={style.item2}>like/dislike</div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
