import style from './../Header/Header.module.css';
import Search from './Search';
import logo from './../../../img/header/logo.svg';
import Button from './Button';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.header_logo}>
                <NavLink to="/">
                    <img className={style.header_logo_img} src={logo} alt="" />
                </NavLink>
            </div>
            <Search className={style.header_search} />
            <div className={style.header_personal}>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? style.active : style.no_active
                    }
                    to="/login"
                >
                    <Button text='Login'/>
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? style.active : style.no_active
                    }
                    to="/signup"
                >
                    <Button text='Sign Up'/>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
