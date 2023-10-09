import brand1 from './../../img/brand1.svg'
import brand2 from './../../img/brand2.svg'
import brand3 from './../../img/brand3.svg'
import brand4 from './../../img/brand4.svg'
import brand5 from './../../img/brand5.svg'
import style from './BrandsDeal.module.css'

const BrandsDeal = () => {
    return (
        <div className={style.block}>
            <h1>Top Brands Deal</h1>
            <p>Up To <b>60%</b> off on brands</p>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
        </div>
    )
}

export default BrandsDeal;