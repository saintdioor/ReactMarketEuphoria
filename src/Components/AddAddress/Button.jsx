import style from "./Button.module.css";

export default function Button(props) {
  return (
    <div className={style.btn}>
      <a className={`${style.button_nav} ${props.active}`} href={props.link}>
        <img src={props.img}></img>
        <div>
          <p>{props.text}</p>
        </div>
      </a>
    </div>
  );
}
