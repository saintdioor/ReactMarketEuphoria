import style from './InputInfo.module.css';
export default function InputInfo(props) {
    return (
        <div>
            <p className={style.name}>{props.text}</p>
            <div className={style.description}>
                <div className={style.data}>{props.data}</div>
                <button className={style.button}>Change</button>
            </div>
            <div className={style.line}>&nbsp;</div>
        </div>
    );
}
