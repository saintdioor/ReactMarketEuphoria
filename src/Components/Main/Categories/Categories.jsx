import Item from './Item';
import style from './Categories.module.css';

const Categories = (props) => {
    let items = props.data.map((card) => (
        <Item
            key={card.id}
            name={card.name}
            img={card.img}
            gender={props.title}
        />
    ));
    return (
        <div className={style.block}>
            <div className={style.head}>
                <h1 className={style.text}>Categories For {props.title}</h1>
            </div>
            <div className={style.container}>{items}</div>
        </div>
    );
};

export default Categories;
