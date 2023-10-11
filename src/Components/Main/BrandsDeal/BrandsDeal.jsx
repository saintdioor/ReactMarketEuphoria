import style from './BrandsDeal.module.css';

const BrandsDeal = (props) => {
    const brands = props.data.map((image) => (
        <img key={image.id} src={image.img} alt={`brand${image.id}`} />
    ));
    return (
        <div className={style.block}>
            <h1>Top Brands Deal</h1>
            <p>
                Up To <b>60%</b> off on brands
            </p>
            {brands}
        </div>
    );
};

export default BrandsDeal;
