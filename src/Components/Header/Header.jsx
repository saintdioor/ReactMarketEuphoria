import style from './../Header/Header.module.css'
import logo from './../../img/logo.svg'
import heart from './../../img/heart.svg'
import user from './../../img/user.svg'
import shop from './../../img/shopping-cart.svg'
import ButtonPersonal from './ButtonPersonal'
import Search from './Search'
import current from './ButtonPersonal.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <div className={style.header}>
            <div className={style.header_logo}>
                <NavLink to='/'><img className={style.header_logo_img} src={logo} alt=''/></NavLink> 
            </div>
            <div className={style.header_pages}>
                <div><NavLink to='/shop' className={`${style.pages} ${style.current}`}>Shop</NavLink></div>
                <div><NavLink to='/men' className={style.pages}>Men</NavLink></div>
                <div><NavLink to='/woman' className={style.pages}>Woman</NavLink></div>
                <div><NavLink to='/combos' className={style.pages}>Combos</NavLink></div>
                <div><NavLink to='/joggers' className={style.pages}>Joggers</NavLink></div>
            </div>
            <Search className={style.header_search}/>
            <div className={style.header_personal}>
                <ButtonPersonal link={'/favorite'} src={heart}/>
                <ButtonPersonal link={'/account'} src={user}/>
                <ButtonPersonal link={'/basket'} src={shop}/>
            </div>
        </div>
    );
}

export default Header;