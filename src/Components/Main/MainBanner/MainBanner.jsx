import { Carousel } from '@trendyol-js/react-carousel';
import Banner from './Banner';
import ButtonArrow from './ButtonArrow';
import left from './../../../img/main_banner/left_arrow.svg';
import right from './../../../img/main_banner/right_arrow.svg';

const MainBanner = () => {
    return (
        <Carousel
            leftArrow={<ButtonArrow image={left} style={'left'} />}
            rightArrow={<ButtonArrow image={right} style={'right'} />}
            slide={1}
            show={1}
            swiping={false}
            infinite={true}
        >
            <Banner />
            <Banner />
        </Carousel>
    );
};

export default MainBanner;
