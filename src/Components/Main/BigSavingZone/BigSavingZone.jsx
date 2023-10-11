import style from './BigSavingZone.module.css';
import { NavLink } from 'react-router-dom';

const BigSaveZone = (props) => {
    const data_line_1 = props.data_line_1.map((sale) => (
        <NavLink key={sale.id} className={style.sale} to="/shop">
            <img className={style.banner} src={sale.img} alt="sale_1_1" />
        </NavLink>
    ));

    const data_line_2 = props.data_line_2.map((sale) => (
        <NavLink key={sale.id} className={style.sale} to="/shop">
            <img className={style.banner} src={sale.img} alt="sale_1_1" />
        </NavLink>
    ));

    return (
        <div className={style.content}>
            <h1 className={style.head}>Big Saving Zone</h1>
            <div className={style.block}>
                <div className={style.line_1}>{data_line_1}</div>
                <div className={style.line_2}>{data_line_2}</div>
            </div>
        </div>
    );
};

export default BigSaveZone;
