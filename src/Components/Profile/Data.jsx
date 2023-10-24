import InputInfo from './InputInfo';
import Address from './Address';
import style from './Data.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { auth, db } from '../../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Data(props) {
    const [user, setUser] = useState('');

    async function fetchData() {
        const userData = ref(db, 'users/' + auth.currentUser.uid);
        onValue(userData, (snapshot) => {
            const data = snapshot.val();
            let dataError = {};
            if (data == null) {
                dataError.name = 'Empty';
                dataError.surname = 'Empty';
                dataError.phone = 'Empty';
                dataError.email = 'Empty';
                setUser(dataError);
            } else {
                setUser(data);
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const addresses = props.dataAddress.map((address) => (
        <Address
            key={address.id}
            name={address.name}
            surname={address.surname}
            number={address.number}
            address={address.address}
        />
    ));

    return (
        <div>
            <div>
                <h1 className={style.name}>My Info</h1>
                <p className={style.description}>Contact Details</p>
            </div>
            <div>
                <InputInfo
                    text={'Your Name'}
                    data={user.name + ' ' + user.surname}
                />
                <InputInfo text={'Email Address'} data={user.email} />
                <InputInfo text={'Phone Number'} data={'+' + user.phone} />
                <InputInfo text={'Password'} data={'********'} />
            </div>
            <div className={style.addAddress}>
                <p className={style.description}>Address</p>
                <NavLink to="/account/address" className={style.button}>
                    Add New
                </NavLink>
            </div>
            <div className={style.address}>{addresses}</div>
        </div>
    );
}
