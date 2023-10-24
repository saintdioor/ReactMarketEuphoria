import style from './Button.module.css';
import { NavLink } from 'react-router-dom';
import { auth } from './../../firebase';
import { signOut } from 'firebase/auth';

export default function Button(props) {
    const navigationListener = () => {
        if (props.id == 'sign-out') {
            signOut(auth).then();
        }
    };

    return (
        <div className={style.btn}>
            <NavLink
                className={`${style.button_nav} ${props.active}`}
                to={props.link}
                onClick={navigationListener}
            >
                <img src={props.img} alt={props.text}></img>
                <div>
                    <p>{props.text}</p>
                </div>
            </NavLink>
        </div>
    );
}
