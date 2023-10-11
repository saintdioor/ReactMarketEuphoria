import style from './InputInfo.module.css';
export default function InputInfo(props) {
    return (
        <div>
            <p className={style.name}>{props.name}</p>
            <div className={style.description}>
                <input
                    id={props.id}
                    className={style.data}
                    placeholder={props.description}
                    required={props.required}
                ></input>
            </div>
        </div>
    );
}
