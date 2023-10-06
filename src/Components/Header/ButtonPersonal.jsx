import style from "./ButtonPersonal.module.css";

function Button(props) {
  return (
    <a href={props.link}>
      <div className={`${style.button_personal} ${props.style}`}>
        <img className={style.icon} src={props.src}></img>
      </div>
    </a>
  );
}

export default Button;
