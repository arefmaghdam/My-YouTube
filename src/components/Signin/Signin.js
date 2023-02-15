import style from "./Signin.module.css"
import { FaRegUserCircle } from "react-icons/fa";

const Signin = () => {
    return (
        <>
            <button className={`btn ${style.signinButton}`}><FaRegUserCircle className={style.userbtn}/><a>Sign in</a></button>
        </>
    )
}

export default Signin;