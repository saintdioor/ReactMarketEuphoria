import EmptyCart from './EmptyCart';
const Cart = (props) => {
    if (props.data.length === 0) {
        return <EmptyCart />;
    } else {
    }
};

export default Cart;
