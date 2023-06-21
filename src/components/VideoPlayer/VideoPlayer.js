import YouTube from "react-youtube";
import YouTubeProps from "react-youtube";
import style from "./VideoPlayer.module.css";
import { BiUserCircle } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { TbShare3 } from "react-icons/tb";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { MdSort } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const VideoPlayer = () => {
  const videoListVideoId = useSelector((state) => state.videoListVideoId.value);
  const videoDatas = useSelector((state) => state.videoListDatas.value);
  const [videoListId, setVideoListId] = useState("");
  const [videoListDatas, setVideoListDatas] = useState([]);
  const [leftScrollState, setLeftScrollState] = useState(0);
  const [rightScrollState, setRightScrollState] = useState(1);

  useEffect(() => {
    setVideoListId(videoListVideoId);
  }, [videoListVideoId]);

  useEffect(() => {
    setVideoListDatas(JSON.parse(videoDatas));
  }, [videoDatas]);

  const onPlayerReady = (YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  });

  const opts = (YouTubeProps["opts"] = {
    height: "",
    width: "",
    // playerVars: "https://developers.google.com/youtube/player_parameters",
  });

  const optsSuggestion = (YouTubeProps["opts"] = {
    height: "100",
    width: "170",
    // playerVars: "https://developers.google.com/youtube/player_parameters",
  });

  const leftScroll = (value) => {
    const element = document.getElementById("scrollDiv1");
    if (element.scrollLeft == 0) {
      setLeftScrollState(0);
    } else {
      setRightScrollState(1);
      setLeftScrollState(1);
    }
    element.scrollLeft += value;
  };

  const rightScroll = (value) => {
    const element = document.getElementById("scrollDiv1");
    if (element.scrollWidth - element.scrollLeft - element.offsetWidth == 0) {
      setRightScrollState(0);
    } else {
      setRightScrollState(1);
      setLeftScrollState(1);
    }
    element.scrollLeft += value;
  };

  return (
    <div className={style.verticalScrollable}>
      <div className={`container-fluid ${style.videoContainer}`}>
        <div className="row">
          <div className="col-md-7">
            <div className={style.videoStyle}>
              <YouTube
                videoId={videoListId}
                opts={opts}
                onReady={onPlayerReady}
              />
            </div>
            <div className={style.videoCaption}>
              <h5>React & Redux Learning crash course</h5>
              <div className={style.flexContainer}>
                <div className={style.item1}>
                  <div className={style.profile}>
                    <BiUserCircle />
                    <div className={style.profileName}>
                      <h6>Masood Sadri</h6>
                      <div>3.2K subscribers</div>
                    </div>
                    <button className={`btn ${style.subscribe}`}>
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className={style.item2}>
                  <button className={`btn ${style.optionbtn}`}>
                    <SlOptions />
                  </button>
                  <button className={`btn ${style.savebtn}`}>
                    <RiPlayListAddLine /> Save
                  </button>
                  <button className={`btn ${style.sharebtn}`}>
                    <TbShare3 /> Share
                  </button>
                  <button className={`btn ${style.dislikebtn}`}>
                    <SlDislike />
                  </button>
                  <button className={`btn ${style.likebtn}`}>
                    <SlLike /> <a>415</a>
                  </button>
                </div>
                <span className={style.videoAbstract}>
                  <h6>14K views 1 year ago</h6>
                  <p>
                    This course is an intensive course that starts with the most
                    basic topics and the main focus during the course will be on
                    the more important concepts of the React library. The React
                    intensive course is suitable for two groups of people, the
                    first group of people who have no knowledge of this library
                    but are interested in learning it, and the second group of
                    people who intend to review the most important concepts in a
                    short time.
                  </p>
                  <div className={`${style.sortbtn}`}>
                    <span>98 Comments</span>
                    <button className={`btn`}>
                      <MdSort /> Sort by
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className={`col-md-5 ${style.scrollContainer}`}>
            <div>
              <div className={`${style.videoListTopScrollShow}`}>
                <div className={style.scrollbarWidth}>
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
                  <div id="scrollDiv1" className={style.category}>
                    <button
                      className={`btn ${style.categoryButtons}`}
                      autoFocus
                    >
                      All
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Live
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Music
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Chill-out music
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      JavaScript
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Jazz
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Gaming
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Ed Shiran
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Algorithms
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Gadgets
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Comedy
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Pop Music
                    </button>
                    <button className={`btn ${style.categoryButtons}`}>
                      Robotic
                    </button>
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
                      rightScrollState == 1
                        ? style.showButton
                        : style.hideButton
                    }`}
                  >
                    <a>
                      <BsChevronRight />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {videoListDatas.map((item) => {
              return (
                <div key={item.videoId}>
                  <div className={style.listContainer}>
                    <div className={style.videoStyleSuggestion}>
                      <YouTube
                        videoId={item.videoId}
                        opts={optsSuggestion}
                        onReady={onPlayerReady}
                      />
                    </div>
                    <div className={style.item2}>
                      <p>{item.title}</p>
                      <h6>{item.author}</h6>
                      <h6>{`${item.views} views . ${item.madeTime}`}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
