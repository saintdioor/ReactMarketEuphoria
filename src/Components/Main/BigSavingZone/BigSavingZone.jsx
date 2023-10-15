import style from './BigSavingZone.module.css';
import { NavLink } from 'react-router-dom';

const BigSaveZone = (props) => {
    const dataLine1 = props.dataLine1.map((sale) => (
        <NavLink key={sale.id} className={style.sale} to="/shop">
            <img className={style.banner} src={sale.img} alt="sale_1_1" />
        </NavLink>
    ));

    const dataLine2 = props.dataLine2.map((sale) => (
        <NavLink key={sale.id} className={style.sale} to="/shop">
            <img className={style.banner} src={sale.img} alt="sale_1_1" />
        </NavLink>
    ));

    return (
        <div className={style.content}>
            <h1 className={style.head}>Big Saving Zone</h1>
            <div className={style.block}>
                <div className={style.line_1}>{dataLine1}</div>
                <div className={style.line_2}>{dataLine2}</div>
            </div>
        </div>
    );
};

export default BigSaveZone;
