import style from './Color.module.css';

const Color = (props) => {
    const color = props.color;
    return (
        <div className={style.block}>
            <div className={style.color} style={ {backgroundColor: color} }></div>
            <p className={style.color_name}>{props.color}</p>
        </div>
    )
}

export default Color;