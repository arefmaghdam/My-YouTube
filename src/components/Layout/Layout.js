import style from "./Layout.module.css";
import { FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import SearchBar from "../SearchBar/SearchBar";
import Signin from "../Signin/Signin";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Layout = () => {
  return (
    <div className={`container-fluid ${style.LayoutContainer}`}>
      <div className={`row ${style.LayoutHeader}`}>
        <div className={`col-md-2 ${style.sidebarBox}`}>
          <div>
            <a className={style.homeMenu} href="">
              <SlMenu />
            </a>
            <a className={style.homeIcon} href="">
              <FaYoutube />
            </a>
            <a href="" className={style.youtube}>
              YouTube
            </a>
          </div>
        </div>
        <div className={`col-md-8 ${style.searchbarBox}`}>
          <SearchBar />
        </div>
        <div className={`col-md-2 ${style.signinBox}`}>
          <Signin />
        </div>
      </div>
      <div className={`row ${style.LayoutBody}`}>
        <div className={`col-md-8 ${style.playerBox}`}><VideoPlayer/></div>
        <div className={`col-md-4 ${style.suggestionBox}`}>
          suggestion videos
        </div>
      </div>
    </div>
  );
};

export default Layout;
