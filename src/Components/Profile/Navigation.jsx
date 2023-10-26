import orders from './../../img/profile/orders.svg';
import account from './../../img/profile/user.svg';
import sign_out from './../../img/profile/sign_out.svg';
import Button from './Button';
import active from './Button.module.css';
import style from './../Profile/Navigation.module.css';
import { useState, useEffect } from 'react';

import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

export default function Navigation() {
    const [user, setUser] = useState('');

    async function fetchData() {
        const db = getDatabase();
        const auth = getAuth();
        const userData = ref(db, 'users/' + auth.currentUser.uid);
        onValue(userData, (snapshot) => {
            const data = snapshot.val();
            setUser(data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={style.block}>
            <div>
                <h1 className={style.greetings}>Hello {user?.name}</h1>
                <p className={style.description}>Welcome to your Account</p>
            </div>
            <div>
                <Button
                    link={'/account/my_orders'}
                    text={'My orders'}
                    img={orders}
                />
                <Button
                    link={'/account'}
                    text={'My info'}
                    img={account}
                    active={active.current}
                />
                <Button
                    id={'sign-out'}
                    link={'/'}
                    text={'Sign out'}
                    img={sign_out}
                />
            </div>
        </div>
    );
}
