import style from './CheckBox.module.css';

const CheckBox = (props) => {
    return (
        <div className={style.block}>
            <input className={style.check_box}id={props.id} type="checkbox"></input>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default CheckBox;
