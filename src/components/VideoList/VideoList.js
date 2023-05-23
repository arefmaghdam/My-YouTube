import { useState } from "react";
import YouTube from "react-youtube";
import style from "./VideoList.module.css";
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";

const VideoList = () => {
  const [videoItems, setVideoItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("All");

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

  const opts = {
    width: "",
    height: "",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
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
                <div className={style.profile}>
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
