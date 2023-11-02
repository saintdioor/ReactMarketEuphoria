import Deal from './Deal';
import style from './Deals.module.css';

const Deals = (props) => {
    const deals = props.data.map((deal) => (
        <Deal key={deal.id} image={deal.image} />
    ));
    return <div className={style.block}>{deals}</div>;
};

export default Deals;
