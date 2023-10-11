import style from './Banner.module.css';
import banner from './../../../img/main_banner/banner_1.png';
import { NavLink } from 'react-router-dom';
const MainBanner = () => {
    return (
        <div>
            <img className={style.image} src={banner} alt="banner" />
            <div className={style.block}>
                <p className={style.clothes}>T-Shirt / Tops</p>
                <h1 className={style.name}>Summer Value Pack</h1>
                <p className={style.description}>cool / colorful / comfy</p>
                <NavLink className={style.link} to="/shop">
                    <p>Shop Now</p>
                </NavLink>
            </div>
        </div>
    );
};

export default MainBanner;
