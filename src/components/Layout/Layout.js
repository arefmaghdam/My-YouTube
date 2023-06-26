import style from "./Layout.module.css";
import { FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import SearchBar from "../SearchBar/SearchBar";
import Signin from "../Signin/Signin";
import { useEffect, useState } from "react";
import Videos from "../Videos/Videos";
import { useSelector } from "react-redux";
import WideSidebar from "../WideSidebar/WideSidebar";
import Sidebar from "../Sidebar/Sidebar";
import OptionMenu from "../OptionMenu/OptionMenu";

const Layout = () => {
  const [sidebarState, setSidebarState] = useState(true);
  const [optStatus, setOptStatus] = useState(false);

  const optionMenuStatus = useSelector((state) => state.optionMenuStatus.value);
  const sidebarMenuStatus = useSelector((state) => state.showVideoList.value);

  useEffect(() => {
    if (optionMenuStatus == 0) return;
    setOptStatus(!optStatus);
  }, [optionMenuStatus]);

  useEffect(() => {
    if (sidebarMenuStatus == true) return;
    setSidebarState(false);
  }, [sidebarMenuStatus]);

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
            <div className={style.sideMenu}>
              <Sidebar />
            </div>
            <div
              className={
                sidebarState == true ? style.sidebarShow : style.sidebarHide
              }
            >
              <WideSidebar />
            </div>
          </div>
        </div>
        <div className={sidebarState == true ? `col-md-10` : `col-md-11`}>
          <div className={style.videoListColumn}>
            <Videos />
          </div>
        </div>
      </div>
      <div
        className={optStatus == false ? style.hideOptMenu : style.optionMenu}
      >
        <OptionMenu />
      </div>
    </div>
  );
};

export default Layout;
