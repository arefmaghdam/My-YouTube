import style from "./Sidebar.module.css";
import { HiHome } from "react-icons/hi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <ul className="nav flex-column nav-pills">
        <li className="navbar">
          <h5>
            <HiHome />
          </h5>{" "}
          Home
        </li>
        <li className="navbar">
          <h5>
            <TbBrandYoutubeKids />
          </h5>{" "}
          Shorts
        </li>
        <li className="navbar">
          <h5>
            <MdOutlineSubscriptions />
          </h5>{" "}
          Subscriptions
        </li>
        <li className="navbar">
          <h5>
            <MdOutlineVideoLibrary />
          </h5>{" "}
          Library
        </li>
        <li className="navbar">
          <h5>
            <VscHistory />
          </h5>{" "}
          History
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
