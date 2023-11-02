import style from './Category.module.css';
import moreIcon from './../../../img/sort/more.svg';
import { useState } from 'react';

const Category = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [rotation, setRotation] = useState(0);

    const handleRangeChange = () => {
        if (props.text !== 'Filter') {
            setIsVisible(!isVisible);
            setRotation(rotation === 0 ? -90 : 0);
          }
    };

    return (
        <div className={style.block}>
            <div className={style.head} onClick={handleRangeChange}>
                <p>{props.text}</p>
                <div onClick={handleRangeChange} className={style.button}>
                    <img
                        className={style.icon}
                        src={props.image}
                        alt="iconMore"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                </div>
            </div>
            {isVisible && props.data}
        </div>
    );
};

export default Category;
