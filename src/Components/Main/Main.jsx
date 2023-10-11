import BrandsDeal from './BrandsDeal/BrandsDeal';
import Categories from './Categories/Categories';
import BigSaveZone from './BigSavingZone/BigSavingZone';
import style from './Main.module.css';
import SecondBanner from './SecondBanner/SecondBanner';
import MainBanner from './MainBanner/MainBanner';
import Deals from './Deals/Deals';
import NewArrival from './NewArrival/NewArrival';

const Main = (props) => {
    return (
        <div className={style.content}>
            <MainBanner />
            <Deals data={props.deals} />
            <NewArrival data={props.new_arrival} />
            <BigSaveZone
                data_line_1={props.sales_line_1}
                data_line_2={props.sales_line_2}
            />
            <SecondBanner />
            <Categories title={'Men'} data={props.men} />
            <Categories title={'Women'} data={props.women} />
            <BrandsDeal data={props.brands} />
        </div>
    );
};

export default Main;
