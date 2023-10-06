import { NavLink } from "react-router-dom";
import style from "./ButtonPersonal.module.css";

function Button(props) {
  return (
    <NavLink to={props.link}>
      <div className={`${style.button_personal} ${props.style}`}>
        <img className={style.icon} src={props.src}></img>
      </div>
    </NavLink>
  );
}

export default Button;
