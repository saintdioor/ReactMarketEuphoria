import style from "./Button.module.css";
import { NavLink } from "react-router-dom";
export default function Button(props) {
  return (
    <div className={style.btn}>
      <NavLink className={`${style.button_nav} ${props.active}`} to={props.link}>
        <img src={props.img}></img>
        <div>
          <p>{props.text}</p>
        </div>
      </NavLink>
    </div>
  );
}
