import style from './Item.module.css';
import delete_icon from './../../img/cart/deletecon.svg';
import { useEffect, useState } from 'react';

const Item = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);
    const [subtotal, setSubtotal] = useState(props.subtotal);

    useEffect(() => {
        setSubtotal(props.price * quantity);
    }, [quantity]);

    const increaseQuantity = () => {
        if (quantity < 9) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <div className={style.block}>
            <img className={style.image} src={props.link_image} alt="item_image" />
            <div className={style.description}>
                <h1 className={style.head}>{props.title}</h1>
                <p className={style.text}>Color: {props.color}</p>
                <p className={style.text}>Size: {props.size}</p>
            </div>
            <p className={style.price}>${props.price}</p>
            <div className={style.quantity}>
                <button onClick={decreaseQuantity} className={style.minus}>
                    -
                </button>
                <p>{quantity}</p>
                <button onClick={increaseQuantity} className={style.plus}>
                    +
                </button>
            </div>
            <p className={style.shipping}>
                {typeof props.shipping !== 'string'
                    ? '$' + props.shipping
                    : 'FREE'}
            </p>
            <p className={style.subtotal}>${subtotal}</p>
            <button className={style.delete_button}>
                <img src={delete_icon} alt="delete_icon" />
            </button>
        </div>
    );
};

export default Item;
