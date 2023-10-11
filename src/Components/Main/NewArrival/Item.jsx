import { NavLink } from 'react-router-dom';
import style from './Item.module.css';

const Item = (props) => {
    return (
        <NavLink to={'/shop'} className={style.block}>
            <img className={style.image} src={props.img} alt={'arrival' + props.id} />
            <p className={style.title}>{props.title}</p>
        </NavLink>
    );
};

export default Item;
