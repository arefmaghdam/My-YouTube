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
      <YouTube videoId="fj9pIe4XMeI" opts={opts} />
      <YouTube videoId="Ajy0RafE46k" opts={opts} />
      <YouTube videoId="YmQSo2ZE_cU" opts={opts} />
      <YouTube videoId="xWDRD6UqZWc" opts={opts} />
      <YouTube videoId="f2EqECiTBL8" opts={opts} />
      <YouTube videoId="NqzdVN2tyvQ" opts={opts} />
      <YouTube videoId="RVFAyFWO4go" opts={opts} />
      <YouTube videoId="gieEQFIfgYc" opts={opts} />
      <YouTube videoId="d56mG7DezGs" opts={opts} />
      <YouTube videoId="erEgovG9WBs" opts={opts} />
      <YouTube videoId="azcrPFhaY9k" opts={opts} />
      <YouTube videoId="6avJHaC3C2U" opts={opts} />
    </div>
  );
};

export default RelatedVideos;
