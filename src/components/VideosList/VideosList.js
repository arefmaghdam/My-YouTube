import YouTube from "react-youtube";
import style from "./VideosList.module.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const VideosList = () => {
  const [leftScrollState, setLeftScrollState] = useState(0);
  const [rightScrollState, setRightScrollState] = useState(1);

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
    if (element.scrollLeft == 0) {
      setLeftScrollState(0);
    } else {
      setRightScrollState(1);
      setLeftScrollState(1);
    }
    element.scrollLeft += value;
  };

  const rightScroll = (value) => {
    const element = document.getElementById("scrollDiv");
    if (element.scrollWidth - element.scrollLeft - element.offsetWidth == 0) {
      setRightScrollState(0);
    } else {
      setRightScrollState(1);
      setLeftScrollState(1);
    }
    element.scrollLeft += value;
  };

  return (
    <div className={`container ${style.videoContainer}`}>
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={() => leftScroll(-50)}
            className={`btn ${style.leftScroll} ${
              leftScrollState == 1 ? style.showButton : style.hideButton
            }`}
          >
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
            <button className={`btn ${style.categoryButtons}`}>Robotic</button>
            <button className={`btn ${style.categoryButtons}`}>
              Electronic
            </button>
            <button className={`btn ${style.categoryButtons}`}>
              ECU Repairing
            </button>
            <button className={`btn ${style.categoryButtons}`}>
              ASP.Net Core
            </button>
            <button className={`btn ${style.categoryButtons}`}>
              Sport Cars
            </button>
          </div>
          <button
            onClick={() => rightScroll(50)}
            className={`btn ${style.rightScroll} ${
              rightScrollState == 1 ? style.showButton : style.hideButton
            }`}
          >
            <a>
              <BsChevronRight />
            </a>
          </button>
        </div>
      </div>
      <div className={`row ${style.verticalScrollable}`}>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
        <div className="col-md-4">
          <div className={style.videos}>
            <YouTube videoId="R7roiId3--U" opts={opts} />
          </div>
          <div className={style.videoCaption}>video caption</div>
        </div>
      </div>
    </div>
  );
};

export default VideosList;
