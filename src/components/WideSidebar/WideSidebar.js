import { FaRegUserCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import style from "./WideSidebar.module.css";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { BsFire } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

const WideSidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <ul className="nav flex-column nav-pills">
          <li className="navbar">
            <a>
              <span>
                <HiHome />
              </span>{" "}
              Home
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <TbBrandYoutubeKids />
              </span>{" "}
              Shorts
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <MdOutlineSubscriptions />
              </span>{" "}
              Subscriptions
            </a>
          </li>
          <div className="dropdown-divider"></div>
          <li className="navbar">
            <a>
              <span>
                <MdOutlineVideoLibrary />
              </span>{" "}
              Library
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <VscHistory />
              </span>{" "}
              History
            </a>
          </li>
          <div className="dropdown-divider"></div>
          <div>
            <p className={style.pStyle}>
              Sign in to like videos, comment, and subscribe.
            </p>
            <button className={`btn ${style.signinButton}`}>
              <FaRegUserCircle className={style.userbtn} />
              <a>Sign in</a>
            </button>
          </div>
          <div className="dropdown-divider"></div>
          <h6>Explore</h6>
          <li className="navbar">
            <a>
              <span>
                <BsFire />
              </span>{" "}
              Trending
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <IoMusicalNoteOutline />
              </span>{" "}
              Music
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <BiMoviePlay />
              </span>
              Movies
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <SiYoutubegaming />
              </span>{" "}
              Gaming
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <IoNewspaperOutline />
              </span>
              News
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <TfiCup />
              </span>{" "}
              Sports
            </a>
          </li>
          <div className="dropdown-divider"></div>
          <li className="navbar">
            <a>
              <span>
                <IoIosAddCircleOutline />
              </span>{" "}
              Browse channels
            </a>
          </li>
          <div className="dropdown-divider"></div>
          <h6>More from YouTube</h6>
          <li className="navbar">
            <a>
              <span className={style.iconColor}>
                <BsYoutube />
              </span>{" "}
              Premium
            </a>
          </li>
          <li className="navbar">
            <a>
              <span className={style.iconColor}>
                <SiYoutubemusic />
              </span>{" "}
              YouTube Music
            </a>
          </li>
          <li className="navbar">
            <a>
              <span className={style.iconColor}>
                <TbBrandYoutubeKids />
              </span>{" "}
              YouTube Kids
            </a>
          </li>
          <div className="dropdown-divider"></div>
          <li className="navbar">
            <a>
              <span>
                <AiOutlineSetting />
              </span>{" "}
              Settings
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <MdOutlineOutlinedFlag />
              </span>{" "}
              Report history
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <MdHelpOutline />
              </span>
              Help
            </a>
          </li>
          <li className="navbar">
            <a>
              <span>
                <MdOutlineFeedback />
              </span>
              Send feedback
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WideSidebar;
