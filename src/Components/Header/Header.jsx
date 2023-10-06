import style from './../Header/Header.module.css'
import logo from './../../img/logo.svg'
import heart from './../../img/heart.svg'
import user from './../../img/user.svg'
import shop from './../../img/shopping-cart.svg'
import ButtonPersonal from './ButtonPersonal'
import Search from './Search'
import current from './ButtonPersonal.module.css'

function Header() {
    return(
        <div className={style.header}>
            <div className={style.header_logo}>
                <a href='/'><img className={style.header_logo_img} src={logo} alt=''/></a> 
            </div>
            <div className={style.header_pages}>
                <div><a href='/shop' className={`${style.pages} ${style.current}`}>Shop</a></div>
                <div><a href='/men' className={style.pages}>Men</a></div>
                <div><a href='/woman' className={style.pages}>Woman</a></div>
                <div><a href='/combos' className={style.pages}>Combos</a></div>
                <div><a href='/joggers' className={style.pages}>Joggers</a></div>
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