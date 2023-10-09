import { NavLink } from "react-router-dom";
import style from "./Address.module.css";

const Address = (props) => {
  return (
    <div className={style.block}>
      <h3 className={style.name}>{props.name + ' ' + props.surname}</h3>
      <p className={style.number}>{props.number}</p>
      <p className={style.address}>{props.address}</p>
      <div className={style.buttons}>
        <button className={style.button}>Remove</button>
        <NavLink className={style.button} to='/AddAddress'>Edit</NavLink>
      </div>
    </div>
  );
};

export default Address;
