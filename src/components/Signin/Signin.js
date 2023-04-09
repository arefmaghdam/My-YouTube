import style from "./Signin.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { increament } from "../../redux/optionMenuStatusSlice";

const Signin = () => {
  const dispatch = useDispatch();

  const OptionMenuStatus = () => {
    dispatch(increament());
  };

  return (
    <>
      <button className={`btn ${style.signinButton}`}>
        <FaRegUserCircle className={style.userbtn} />
        <a>Sign in</a>
      </button>
      <button onClick={OptionMenuStatus} className={style.optionbtn}>
        <SlOptionsVertical />
      </button>
    </>
  );
};

export default Signin;
