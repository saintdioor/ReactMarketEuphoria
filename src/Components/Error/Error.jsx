import { NavLink } from 'react-router-dom';
import errorImage from './../../img/error.svg';
import style from './Error.module.css';

const Error = () => {
    return (
        <div className={style.block}>
            <img src={errorImage} alt=""></img>
            <h1 className={style.head}>Oops! Page not found</h1>
            <p className={style.description}>
                The page you are looking for might have been removed or
                temporarily.
            </p>
            <button className={style.btn}>
                <NavLink to={'/main'}>Back to HomePage</NavLink>
            </button>
        </div>
    );
};

export default Error;
