import { NavLink } from 'react-router-dom';
import style from './Deal.module.css';

const Deal = (props) => {
    return (
        <div className={style.link}>
            <NavLink to="/shop">
                <img src={props.image} alt={'deal'} />
            </NavLink>
        </div>
    );
};

export default Deal;
