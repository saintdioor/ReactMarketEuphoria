import orders from './../../img/profile/orders.svg';
import account from './../../img/profile/user.svg';
import sign_out from './../../img/profile/sign_out.svg';
import Button from './Button';
import active from './Button.module.css';
import style from './../Profile/Navigation.module.css';

export default function Navigation(props) {
    return (
        <div className={style.block}>
            <div>
                <h1 className={style.greetings}>Hello {props.name}</h1>
                <p className={style.description}>Welcome to your Account</p>
            </div>
            <div>
                <Button link={'/account/my_orders'} text={'My orders'} img={orders} />
                <Button
                    link={'/account'}
                    text={'My info'}
                    img={account}
                    active={active.current}
                />
                <Button id={'sign-out'} link={'/'} text={'Sign out'} img={sign_out} />
            </div>
        </div>
    );
}
