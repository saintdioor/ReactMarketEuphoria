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
                <a href='./'><img className={style.header_logo_img} src={logo} alt=''/></a> 
            </div>
            <div className={style.header_pages}>
                <a href='#' className={`${style.pages} ${style.current}`}>Shop</a>
                <a href='#' className={style.pages}>Men</a>
                <a href='#' className={style.pages}>Woman</a>
                <a href='#' className={style.pages}>Combos</a>
                <a href='#' className={style.pages}>Joggers</a>
            </div>
            <Search className={style.header_search}/>
            <div className={style.header_personal}>
                <ButtonPersonal src={heart}/>
                <ButtonPersonal src={user}/>
                <ButtonPersonal src={shop}/>
            </div>
        </div>
    );
}

export default Header;