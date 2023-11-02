import EmptyCart from './EmptyCart';
import CartHeader from './CartHeader';
import Item from './Item';
import FinalPrice from './FinalPrice';

import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const Cart = (props) => {
    const [dataOfCart, setDataOfCart] = useState([]);
    async function fetchData() {
        const db = getDatabase();
        const auth = getAuth();
        const userData = ref(db, `users/${auth.currentUser.uid}/cart`);
        onValue(userData, (snapshot) => {
            const data = snapshot.val();
            setDataOfCart(data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    let subtotal = 0;
    let shipping = 0;
    let grandtotal = 0;

    if (dataOfCart.length === 0) {
        return <EmptyCart />;
    } else {

        subtotal = dataOfCart.reduce((total, item) => {
            return total + (item.price || 0) * (item.count || 0);
        }, 0);

        shipping = dataOfCart.reduce((total, item) => {
            return (
                total +
                (typeof item.shipping == 'string' || item.shipping == undefined
                    ? 0
                    : item.shipping)
            );
        }, 0);

        grandtotal = subtotal + shipping;

        let index = 0;
        const items = dataOfCart.map((item) => (
            <Item
                id={item.key}
                key={item.key}
                link_image={props.data[index++].image}
                title={item.title}
                color={item.color}
                size={item.size}
                price={item.price}
                quantity={item.count}
                shipping={item.shipping}
                subtotal={
                    item.price * item.count +
                    (typeof item.shipping !== 'string' ? item.shipping : '')
                }
            />
        ));

        return (
            <div>
                <CartHeader />
                {items}
                <FinalPrice
                    subtotal={subtotal}
                    shipping={shipping}
                    grandtotal={grandtotal}
                />
            </div>
        );
    }
};

export default Cart;
