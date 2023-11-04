import { useEffect } from "react";
import Description from "./Description";
import image from './../../img/item/item1.png';
import style from './Item.module.css';

const Item = () => {
    useEffect(() => {
        // Get url 
        const path = window.location.href;

        // Split url by '/'
        const parts = path.split('/');

        // Now we have id for item
        const id = parts[parts.length - 1];
      }, []);
    return (
        <div className={style.item}>
            <img className={style.image}src={image} alt="" />
            <Description/>
        </div>
    )
}

export default Item;