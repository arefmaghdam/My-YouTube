import YouTube from "react-youtube";
import style from "./VideosList.module.css";
import { YouTubeProps } from "react-youtube";

const VideosList = () => {
  const opts = {
    width: "",
    height: "",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={style.category}>
            <button className={`btn ${style.categoryButtons}`}>All</button>
            <button className={`btn ${style.categoryButtons}`}>Live</button>
            <button className={`btn ${style.categoryButtons}`}>Music</button>
            <button className={`btn ${style.categoryButtons}`}>
              Chill-out music
            </button>
            <button className={`btn ${style.categoryButtons}`}>
              JavaScript
            </button>
            <button className={`btn ${style.categoryButtons}`}>Jazz</button>
            <button className={`btn ${style.categoryButtons}`}>Gaming</button>
            <button className={`btn ${style.categoryButtons}`}>
              Ed Shiran
            </button>
            <button className={`btn ${style.categoryButtons}`}>
              Algorithms
            </button>
            <button className={`btn ${style.categoryButtons}`}>Gadgets</button>
            <button className={`btn ${style.categoryButtons}`}>Comedy</button>
            <button className={`btn ${style.categoryButtons}`}>
              Pop Music
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="6QfN3ghaUfE" opts={opts} />
          </div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="fj9pIe4XMeI" opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosList;
