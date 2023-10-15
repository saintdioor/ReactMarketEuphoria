import style from './CartHeader.module.css';

const CartHeader = () => {
    return (
        <div className={style.block}>
            <p className={style.first}>PRODUCT DETAILS</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SHIPPING</p>
            <p>SUBTOTAL</p>
            <p>ACTION</p>
        </div>
    )
}

export default CartHeader;