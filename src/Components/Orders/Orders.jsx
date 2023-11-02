import Order from './Order';
import style from './Orders.module.css';
import EmptyCart from '../Cart/EmptyCart';

import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const Orders = (props) => {
    const [orders, setOrders] = useState([]);
    async function fetchData() {
        const db = getDatabase();
        const auth = getAuth();
        const userData = ref(db, `users/${auth.currentUser.uid}/orders`);
        onValue(userData, (snapshot) => {
            const data = snapshot.val();
            setOrders(data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    let index = 0;
    let data;
    if (!orders === null) {
        data = orders.map((item) => (
            <Order
                image={props.data[index++].image}
                create={item.create}
                delivery={item.delivery}
                id={item.id}
                status={item.status}
                payment={item.payment}
                color={item.color}
                qty={item.qty}
                title={item.title}
                total={item.total}
            />
        ));
    } else {
        data = <EmptyCart />;
    }

    return (
        <div>
            <h1 className={style.head}>My Orders</h1>
            {data}
        </div>
    );
};

export default Orders;
