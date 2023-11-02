import style from './Button.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slice/userSlice';

export default function Button(props) {
    const dispatch = useDispatch();

    const navigationListener = () => {
        if (props.id == 'sign-out') dispatch(removeUser());
    };

    return (
        <div className={style.btn}>
            <NavLink
            className={(navData) =>
                navData.isActive ? `${style.button_nav} ${style.active}` : style.button_nav
            }
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
