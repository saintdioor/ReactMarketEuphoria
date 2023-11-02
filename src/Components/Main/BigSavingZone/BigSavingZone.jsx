import style from './BigSavingZone.module.css';
import { NavLink } from 'react-router-dom';

const BigSaveZone = (props) => {
    const dataLine1 = [];
    for (let index = 0; index < 3; index++) {
        console.log(props.data[0]);
        dataLine1.push(
            <NavLink key={index} className={style.sale} to="/shop">
                <img
                    className={style.banner}
                    src={props.data[index].image}
                    alt={'sale'}
                />
            </NavLink>
        );
    }

    const dataLine2 = [];
    for (let index = 3; index < 5; index++) {
        dataLine2.push(
            <NavLink key={index} className={style.sale} to="/shop">
                <img
                    className={style.banner}
                    src={props.data[index].image}
                    alt={'sale'}
                />
            </NavLink>
        );
    }

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
