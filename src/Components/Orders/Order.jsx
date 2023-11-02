import style from './Order.module.css';

const Order = (props) => {
    return (
        <div className={style.block}>
            <div className={style.header}>
                <p className={style.number_order}>
                    <b>Order no: #{props.id}</b>
                </p>
                <div className={style.information_order}>
                    <div className={style.block_left}>
                        <p className={style.text}>
                            <b>Order date:</b> {props.create}
                        </p>
                        <p className={style.text}>
                            <b>Estimated Delivery Date:</b> {props.delivery}
                        </p>
                    </div>
                    <div className={style.block_right}>
                        <p className={style.text}>
                            <b>Order Status:</b> {props.status}
                        </p>
                        <p className={style.text}>
                            <b>Payment Method:</b> {props.payment}
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.left_block_item}>
                    <div className={style.image_block}>
                        <img
                            className={style.image}
                            src={props.image}
                            alt="order_image"
                        />
                    </div>
                    <div className={style.item_description}>
                        <p>
                            <b>{props.title}</b>
                        </p>
                        <p>
                            <b>Color:</b> {props.color}
                        </p>
                        <p>
                            <b>Qty:</b> {props.qty}
                        </p>
                        <p>Total: ${props.total}</p>
                    </div>
                </div>
                <div className={style.right_block_item}>
                    <button className={style.button}>View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
