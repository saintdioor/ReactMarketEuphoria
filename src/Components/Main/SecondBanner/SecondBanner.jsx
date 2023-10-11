import banner from './../../../img/banner.png';
import { NavLink } from 'react-router-dom';
import style from './SecondBanner.module.css';

const SecondBanner = () => {
    return (
        <div className={style.banner}>
                <img src={banner} alt="" />
                <div>
                    <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                    <p>
                        In our journey to improve everyday fashion, euphoria
                        presents EVERYDAY wear range - Comfortable & Affordable
                        fashion 24/7
                    </p>
                    <NavLink to="/shop" className={style.button}>
                        Shop Now
                    </NavLink>
                </div>
            </div>
    )
}

export default SecondBanner;