import Sort from './Sort/Sort';
import Items from './Items/Items';
import style from './Market.module.css';

const Market = () => {
    return (
        <div className={style.block}>
            <Sort/>
            <Items/>
        </div>
    )
}

export default Market;