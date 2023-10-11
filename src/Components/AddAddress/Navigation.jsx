import orders from './../../img/orders.svg';
import heart from './../../img/heart.svg';
import account from './../../img/user.svg';
import signout from './../../img/signout.svg';
import Button from './Button';
import active from './Button.module.css';
import style from './Navigation.module.css';

export default function Navigation(props) {
    return (
        <div className={style.block}>
            <div>
                <h1 className={style.greetings}>Hello {props.name}</h1>
                <p className={style.description}>Welcome to your Account</p>
            </div>
            <div>
                <Button link={'/account'} text={'My orders'} img={orders} />
                <Button link={'/wishlist'} text={'Wishlist'} img={heart} />
                <Button
                    link={'/myinfo'}
                    text={'My info'}
                    img={account}
                    active={active.current}
                />
                <Button link={'/signout'} text={'Sign out'} img={signout} />
            </div>
        </div>
    );
}
