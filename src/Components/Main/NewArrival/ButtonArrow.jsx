import style from './ButtonArrow.module.css';

const ButtonArrow = (props) => {
    return (
        <div className={`${style.block} ${style[props.style]}`}>
            <img src={props.image} alt="button_icon" />
        </div>
    );
};

export default ButtonArrow;
