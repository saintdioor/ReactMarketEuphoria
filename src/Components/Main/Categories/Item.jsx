import { NavLink } from 'react-router-dom';
import style from './Item.module.css';

const Item = (props) => {
    return (
        <NavLink to={`/${props.gender.toLowerCase()}`} className={style.card}>
            <img src={props.img} alt={`categories for ${props.gender}`} />
            <div className={style.description}>
                <div className={style.text}>
                    <h3 className={style.head_text}>{props.name}</h3>
                    <p className={style.text}>Explore Now!</p>
                </div>
                <p className={style.text}>🡪</p>
            </div>
        </NavLink>
    );
};

export default Item;
