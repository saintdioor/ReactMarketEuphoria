import EmptyCart from './EmptyCart';
import style from './Cart.module.css';

const Cart = (props) => {
    if (props.data.length === 0) {
        return <EmptyCart />;
    } else {
    }
};

export default Cart;
