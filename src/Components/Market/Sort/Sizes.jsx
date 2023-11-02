import style from './Sizes.module.css'
const Sizes = () => {
    return (
        <div className={style.block}>
            <div className={style.size}>XXS</div>
            <div className={style.size}>XL</div>
            <div className={style.size}>XS</div>
            <div className={style.size}>S</div>
            <div className={style.size}>M</div>
            <div className={style.size}>L</div>
            <div className={style.size}>XXL</div>
            <div className={style.size}>3XL</div>
            <div className={style.size}>4XL</div>
        </div>
    )
}

export default Sizes;