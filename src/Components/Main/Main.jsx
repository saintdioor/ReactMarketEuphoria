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
            <NewArrival data={props.newArrival} />
            <BigSaveZone data={props.saving}/>
            <SecondBanner />
            <Categories title={'Men'} data={props.men} />
            <Categories title={'Women'} data={props.women} />
            <BrandsDeal data={props.brands} />
        </div>
    );
};

export default Main;
