import style from "./Button.module.css";

export default function Button(props) {
  return (
    <a href={props.link}>
      <div className={style.btn}>
        <button className={`${style.button_nav} ${props.active}`}>
          <img src={props.img}></img>
          <div>
            <p>{props.text}</p>
          </div>
        </button>
      </div>
    </a>
  );
}
