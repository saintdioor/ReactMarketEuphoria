import style from './Description.module.css';
import icon from './../../img/item/Icon.svg';
import star from './../../img/item/Star.svg';
import busket from './../../img/item/busket.svg';

const Description = () => {
    const red = {
        backgroundColor: '#9C1F35'
    }
    const pink = {
        backgroundColor: '#EB84B0'
    }
    const yellow = {
        backgroundColor: '#EDD146'
    }
    const black = {
        backgroundColor: '#3C4242'
    }
    return (
        <div className={style.block}>
            <div className={style.title}>
                <h1>Raven Hoodie With Black colored Design</h1>
            </div>
            <div className={style.description}>
                <div className={style.ratingItem}>
                    <div className={style.rating}>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <p>3.5</p>
                    </div>
                    <div className={style.comments}>
                        <img src={icon} alt="" />
                        <div className={style.data}>
                            <p>120</p>
                            <p>comment</p>
                        </div>
                    </div>
                </div>
                <div className={style.sizes}>
                    <p>Select Size</p>
                    <p>Size Guide→</p>
                </div>
                <div className={style.button_sizes}>
                    <div className={style.btnSize}>XS</div>
                    <div className={style.btnSize}>S</div>
                    <div className={style.btnSize}>M</div>
                    <div className={style.btnSize}>L</div>
                    <div className={style.btnSize}>XL</div>
                </div>
                <div className={style.colors}>
                    <p>Colors Available</p>
                </div>
                <div className={style.color_items}>
                    <div className={style.color} style={black}></div>
                    <div className={style.color} style={yellow}></div>
                    <div className={style.color} style={pink}></div>
                    <div className={style.color} style={red}></div>
                </div>
                <div className={style.addToCart}>
                    <div className={style.button_outside}>
                        <button className={style.button}>
                            <div className={style.inside}>
                                <img src={busket} alt="" />
                                <p>Add to cart</p>
                            </div>
                        </button>
                    </div>
                    <div className={style.price}>
                        <p>$63.00</p>
                    </div>
                </div>
                <div className={style.divider}></div>
            </div>
        </div>
    );
};

export default Description;
