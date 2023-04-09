import style from "./Layout.module.css";
import { FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import SearchBar from "../SearchBar/SearchBar";
import Signin from "../Signin/Signin";
import { useEffect, useState } from "react";
import VideosList from "../VideosList/VideosList";
import { useSelector } from "react-redux";

const Layout = () => {
  const [sidebarState, setSidebarState] = useState(false);
  const [optStatus, setOptStatus] = useState(false);

  const optionMenuStatus = useSelector((state) => state.optionMenuStatus.value);

  useEffect(() => {
    if (optionMenuStatus == 0) return;
    setOptStatus(!optStatus);
  }, [optionMenuStatus]);

  const sidebarStatus = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <div className={`container-fluid ${style.LayoutContainer}`}>
      <div className={`row ${style.LayoutHeader}`}>
        <div className={`col-md-2 ${style.sidebarBox}`}>
          <div>
            <a onClick={sidebarStatus} className={style.homeMenu}>
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
      <div className="row">
        <div className={sidebarState == true ? `col-md-2` : `col-md-1`}>
          <div className={`${style.sideColumn}`}>
            <div className={style.sideMenu}>sidebar</div>
            <div
              className={
                sidebarState == true ? style.sidebarShow : style.sidebarHide
              }
            >
              sidebar show
            </div>
          </div>
        </div>
        <div className={sidebarState == true ? `col-md-10` : `col-md-11`}>
          <div className={style.videoListColumn}>
            <VideosList />
          </div>
        </div>
      </div>
      <div
        className={optStatus == false ? style.hideOptMenu : style.optionMenu}
      >
        Option Menu
      </div>
    </div>
  );
};

export default Layout;
