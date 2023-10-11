import style from './EmptyCart.module.css';
import emptycart from './../../img/emptycart.svg';
import { NavLink } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className={style.block}>
            <img src={emptycart} alt=""></img>
            <h1 className={style.head}>Your cart is empty and sad :(</h1>
            <p className={style.description}>Add something to make it happy!</p>
            <button className={style.btn}>
                <NavLink to={'/main'}>Continue Shopping</NavLink>
            </button>
        </div>
    );
};

export default EmptyCart;
