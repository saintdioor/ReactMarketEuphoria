import style from './ButtonPersonal.module.css'

function Button(props) {
    return(
        <div className={`${style.button_personal} ${props.style}`}>
            <img className={style.icon} src={props.src}></img>
        </div>
    );
}

export default Button;