import style from './TypeItem.module.css';
import moreIcon from './../../../img/sort/more.svg';

const TypeItem = (props) => {
    return (
        <div className={style.type}>
            <p>{props.title}</p>
            <div><img className={style.icon} src={moreIcon} alt="" /></div>
        </div>
    )
}

export default TypeItem;
