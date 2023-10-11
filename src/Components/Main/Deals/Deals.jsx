import Deal from './Deal';
import style from './Deals.module.css';

const Deals = (props) => {
    const deals = props.data.map((deal) => (
        <Deal key={deal.id} id={deal.id} image={deal.img} />
    ));
    return <div className={style.block}>{deals}</div>;
};

export default Deals;
