import style from "./RelatedVideos.module.css";
import YouTube from "react-youtube";
import YouTubeProps from "react-youtube";

const RelatedVideos = () => {
  const opts = (YouTubeProps["opts"] = {
    height: "85",
    width: "165",
    // playerVars: "https://developers.google.com/youtube/player_parameters",
  });

  return (
    <div>
      <div className={style.flexContainer}>
        <div className={style.item1}>
          {/* <YouTube videoId="fj9pIe4XMeI" opts={opts} /> */}
        </div>
        <div className={style.item2}>
          <h6>HTML & CSS learning crash course</h6>
          <a>frontcast</a>
          <div>
            <a>1.6k view . 1 years ago</a>
          </div>
        </div>
      </div>
      <div className={style.flexContainer}>
        <div className={style.item1}>
          {/* <YouTube videoId="Ajy0RafE46k" opts={opts} /> */}
        </div>
        <div className={style.item2}>
          <h6>React JS learning crash course</h6>
          <a>NeonLearn</a>
          <div>
            <a>2.8k view . 1.5 years ago</a>
          </div>
        </div>
      </div>
      <div className={style.flexContainer}>
        <div className={style.item1}>
          {/* <YouTube videoId="YmQSo2ZE_cU" opts={opts} /> */}
        </div>
        <div className={style.item2}>
          <h6>Node.js learning crash course</h6>
          <a>frontcast</a>
          <div>
            <a>2.1k view . 2 years ago</a>
          </div>
        </div>
      </div>
      <div className={style.flexContainer}>
        <div className={style.item1}>
          {/* <YouTube videoId="xWDRD6UqZWc" opts={opts} /> */}
        </div>
        <div className={style.item2}>
          <h6>Java Script learning crash course</h6>
          <a>NeonLearn</a>
          <div>
            <a>2.3k view . 3 years ago</a>
          </div>
        </div>
      </div>
      <div className={style.flexContainer}>
        <div className={style.item1}>
          {/* <YouTube videoId="f2EqECiTBL8" opts={opts} /> */}
        </div>
        <div className={style.item2}>
          <h6>Node.js learning Full course</h6>
          <a>frontcast</a>
          <div>
            <a>1.6k view . 1 years ago</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideos;
