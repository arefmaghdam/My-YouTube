import YouTube from "react-youtube";
import style from "./VideosList.module.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const VideosList = () => {
  const opts = {
    width: "",
    height: "",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const leftScroll = (value) => {
    const element = document.getElementById("scrollDiv");
    element.scrollLeft += value;
  };

  const rightScroll = (value) => {
    const element = document.getElementById("scrollDiv");
    element.scrollLeft += value;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button onClick={() => leftScroll(-50)} className={`btn ${style.leftScroll}`}>
            <a>
              <BsChevronLeft />
            </a>
          </button>
          <div id="scrollDiv" className={style.category}>
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
          <button onClick={() => rightScroll(50)} className={`btn ${style.rightScroll}`}>
            <a>
              <BsChevronRight />
            </a>
          </button>
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
