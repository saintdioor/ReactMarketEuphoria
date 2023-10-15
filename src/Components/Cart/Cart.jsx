import EmptyCart from './EmptyCart';
import CartHeader from './CartHeader';
import Item from './Item';

const Cart = (props) => {
    if (props.data.length === 0) {
        return <EmptyCart />;
    } else {
        const items = props.data.map((item) => (
            <Item
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                color={item.color}
                size={item.size}
                price={item.price}
                quantity={item.quantity}
                shipping={item.shipping}
                subtotal={
                    item.price * item.quantity +
                    (typeof item.shipping !== 'string' ? item.shipping : '')
                }
            />
        ));

        return (
            <div>
                <CartHeader />
                {items}
            </div>
        );
    }
};

export default Cart;
