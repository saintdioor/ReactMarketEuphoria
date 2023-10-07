import { NavLink } from "react-router-dom";
import style from "./ButtonPersonal.module.css";

function Button(props) {
  return (
    <NavLink
      to={props.link}
      className={(navData) =>
        navData.isActive ? style.active : style.button_personal
      }
    >
      <img className={style.icon} src={props.src} alt=''></img>
    </NavLink>
  );
}

export default Button;
