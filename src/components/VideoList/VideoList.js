import { useState } from "react";
import YouTube from "react-youtube";
import style from "./VideoList.module.css";
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { videoListState } from "../../redux/showVideoListSlice";
import { videoListVideoId } from "../../redux/videListVideoId";

const VideoList = () => {
  const [videoItems, setVideoItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("All");
  const [showVideoList, setShowVideoList] = useState(true);
  const [videoId, setVideoId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videoList`)
      .then((response) => {
        if (response.status !== 200) return;
        console.log(response);
        setVideoItems(response.data);
      })
      .catch((err) => {
        console.log(err.code + "***********");
      });
  }, [searchTerm]);

  useEffect(() => {
    console.log(showVideoList);
    dispatch(videoListState(showVideoList));
  }, [showVideoList]);

  useEffect(() => {
    console.log(videoId);
    dispatch(videoListVideoId(videoId));
  }, [videoId]);

  const opts = {
    width: "",
    height: "",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const showVideoPlayer = () => {
    console.log("video is clicked!");
  };

  return (
    <div className={`container ${style.videoContainer}`}>
      <div className={`row ${style.verticalScrollable}`}>
        {videoItems.map((item, index) => {
          return (
            <div key={index} className="col-md-4">
              <div className={style.videos}>
                <YouTube videoId={item.id.videoId} opts={opts} />
              </div>
              <div className={style.videoCaption}>
                <div
                  onClick={() => {
                    setShowVideoList(false);
                    setVideoId(item.videoId);
                  }}
                  className={style.profile}
                >
                  <div>
                    <FaUserCircle />
                  </div>
                  <p className={style.item2}>{item.title}</p>
                </div>
                <div className={style.fontStyle}>{item.author}</div>
                <div
                  className={style.fontStyle}
                >{`${item.views} views . ${item.madeTime}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
