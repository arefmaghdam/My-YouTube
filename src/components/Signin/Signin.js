import style from "./Signin.module.css"
import { FaRegUserCircle } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const Signin = () => {
    return (
        <>
            <button className={`btn ${style.signinButton}`}><FaRegUserCircle className={style.userbtn}/><a>Sign in</a></button>
            <button className={style.optionbtn}><SlOptionsVertical/></button>
        </>
    )
}

export default Signin;