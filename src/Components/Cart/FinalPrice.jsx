import style from './FinalPrice.module.css';

export default function FinalPrice(props) {
    return (
        <div className={style.block}>
            <div className={style.left_block}>
                <h1 className={style.name}>Discount Codes</h1>
                <p className={style.description}>Enter your coupon code if you have one</p>
                <div className={style.coupon}>
                    <input className={style.input} type="text" />
                    <button className={style.button}>Apply Coupon</button>
                </div>
                <button className={style.btn_next}>Continue Shopping</button>
            </div>
            <div>
                <div className={style.right_block}>
                    <div>
                        <p className={style.text1}>Sub Total</p>
                        <p className={style.text1}>Shipping</p>
                        <p className={style.text2}>Grand Total</p>
                    </div>
                    <div>
                        <p className={style.text1}>{`$${props.subtotal}`}</p>
                        <p className={style.text1}>{`$${props.shipping}`}</p>
                        <p className={style.text2}>{`$${props.grandtotal}`}</p>
                    </div>
                </div>
                <button className={style.checkout}>Proceed To Checkout</button>
            </div>
        </div>
    );
}
