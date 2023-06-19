import {RiShieldUserLine} from "react-icons/ri"
import {IoMoonOutline} from "react-icons/io5"
import {HiLanguage} from "react-icons/hi2"
import {AiOutlineSafety} from "react-icons/ai"
import {IoEarthSharp} from "react-icons/io5"
import {MdOutlineKeyboard} from "react-icons/md"
import {IoSettingsOutline} from "react-icons/io5"
import {TfiHelpAlt} from "react-icons/tfi"
import {RiFeedbackLine} from "react-icons/ri"
import style from "./OptionMenu.module.css"

const OptionMenu = () => {
  return (
    <div className={style.optionStyles}>
    <ul className="nav flex-column nav-pills">
      <li className="navbar">
        <a>
          <span>
            <RiShieldUserLine />
          </span>{" "}
          Your data in YouTube
        </a>
      </li>
      <div className="dropdown-divider"></div>
      <li className="navbar">
        <a>
          <span>
            <IoMoonOutline />
          </span>{" "}
          Appearance: Device theme
        </a>
      </li>
      <li className="navbar">
        <a>
          <span>
            <HiLanguage />
          </span>{" "}
          Language: English
        </a>
      </li>
      <li className="navbar">
        <a>
          <span>
            <AiOutlineSafety />
          </span>{" "}
          Restricted Mode: Off
        </a>
      </li>
      <li className="navbar">
        <a>
          <span>
            <IoEarthSharp />
          </span>{" "}
          Locations: Netherlands
        </a>
      </li>
      <li className="navbar">
        <a>
          <span>
            <MdOutlineKeyboard />
          </span>{" "}
          Keyboard shortcuts
        </a>
      </li>
      <div className="dropdown-divider"></div>
      <li className="navbar">
        <a>
          <span>
            <IoSettingsOutline />
          </span>{" "}
          Settings
        </a>
      </li>
      <div className="dropdown-divider"></div>
      <li className="navbar">
        <a>
          <span>
            <TfiHelpAlt />
          </span>{" "}
          Help
        </a>
      </li>
      <li className="navbar">
        <a>
          <span>
            <RiFeedbackLine />
          </span>{" "}
          Send feedback
        </a>
      </li>
    </ul>
  </div>
  );
};

export default OptionMenu;
