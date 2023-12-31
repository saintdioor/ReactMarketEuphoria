import style from './../Header/Header.module.css';
import logo from './../../img/header/logo.svg';
import heart from './../../img/header/heart.svg';
import user from './../../img/header/user.svg';
import shop from './../../img/header/shopping-cart.svg';
import ButtonPersonal from './ButtonPersonal';
import Search from './Search';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.header_logo}>
                <NavLink to="/">
                    <img className={style.header_logo_img} src={logo} alt="" />
                </NavLink>
            </div>
            <div className={style.header_pages}>
                <div>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? style.current : style.pages
                        }
                        to="/shop"
                    >
                        Shop
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? style.current : style.pages
                        }
                        to="/men"
                    >
                        Men
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? style.current : style.pages
                        }
                        to="/women"
                    >
                        Woman
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? style.current : style.pages
                        }
                        to="/combos"
                    >
                        Combos
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={(navData) =>
                            navData.isActive ? style.current : style.pages
                        }
                        to="/joggers"
                    >
                        Joggers
                    </NavLink>
                </div>
            </div>
            <Search className={style.header_search} />
            <div className={style.header_personal}>
                <ButtonPersonal link={'/favorite'} src={heart} />
                <ButtonPersonal link={'/account'} src={user} />
                <ButtonPersonal link={'/cart'} src={shop} />
            </div>
        </div>
    );
}

export default Header;
