import left from './../../../img/main_banner/left_arrow.svg';
import right from './../../../img/main_banner/right_arrow.svg';
import { Carousel } from '@trendyol-js/react-carousel';
import style from './NewArrival.module.css';
import ButtonArrow from './ButtonArrow';
import Item from './Item';

const NewArrival = (props) => {
    const arrivals = props.data.map((arrival) => (
        <Item
            id={arrival.id}
            title={arrival.title}
            key={arrival.id}
            img={arrival.img}
            style="left: 50px"
        />
    ));

    return (
        <div className={style.content}>
            <h1 className={style.head}>New Arrival</h1>
            <Carousel
                leftArrow={<ButtonArrow image={left} style={'left'} />}
                rightArrow={<ButtonArrow image={right} style={'right'} />}
                slide={1}
                show={4}
                swiping={false}
                infinite={true}
                className={style.carousel}
            >
                {arrivals}
            </Carousel>
        </div>
    );
};

export default NewArrival;
