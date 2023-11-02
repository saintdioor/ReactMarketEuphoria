import style from './Item.module.css';
import heart from './../../../img/sort/heart.svg';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
        <NavLink className={style.link} to={`/item/${props.id}`}>
            <div className={style.block}>
                <div>
                    <img className={style.image} src={props.image} alt="" />
                    <button className={style.button}>
                        <div><img src={heart} alt="add_to_favorite" /></div>
                    </button>
                </div>
                <div className={style.content}>
                    <div className={style.description}>
                        <p className={style.title}>Black Sweatshirt with ....</p>
                        <p  className={style.brand}>Jhanvi’s  Brand</p>
                    </div>
                    <div className={style.price}><p>${props.price}</p></div>
                </div>
            </div>
        </NavLink>
    )
}

export default Item;