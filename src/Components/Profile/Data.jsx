import InputInfo from "./InputInfo";
import style from "./Data.module.css";
import { NavLink } from "react-router-dom";

export default function Data(props) {
  return (
    <div>
      <div>
        <h1 className={style.name}>My Info</h1>
        <p className={style.description}>Contact Details</p>
      </div>
      <div>
        <InputInfo text={"Your Name"} data={props.dataUser.name + ' ' + props.dataUser.surname} />
        <InputInfo text={"Email Address"} data={props.dataUser.email} />
        <InputInfo text={"Phone Number"} data={props.dataUser.phone} />
        <InputInfo text={"Password"} data={"********"} />
      </div>
      <div className={style.addAddress}>
        <p className={style.description}>Address</p>
        <NavLink to='/addaddress' className={style.button}>Add New</NavLink>
      </div>
    </div>
  );
}
