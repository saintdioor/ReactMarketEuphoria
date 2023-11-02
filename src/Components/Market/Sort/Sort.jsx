import filter from './../../../img/sort/filter.png';
import moreIcon from './../../../img/sort/more.svg';
import style from './Sort.module.css';
import TypeItem from './TypeItem';
import DoubleSlider from './DoubleSlider';
import Category from './Category';
import Colors from './Colors';
import Sizes from './Sizes';

const Sort = () => {
    return (
        <div className={style.block}>
            <Category
                text="Filter"
                image={filter}
                data={[
                    <TypeItem title="Tops" />,
                    <TypeItem title="Printed T-shirts" />,
                    <TypeItem title="Plain T-shirts" />,
                    <TypeItem title="Kurti" />,
                    <TypeItem title="Boxers" />,
                    <TypeItem title="Full sleeve T-shirts" />,
                    <TypeItem title="Joggers" />,
                    <TypeItem title="Payjamas" />,
                    <TypeItem title="Jeans" />,
                ]}
            />
            <div></div>
            <Category
                text="Price"
                image={moreIcon}
                data={
                    <div className={style.slider}>
                        <DoubleSlider />
                    </div>
                }
            />
            <Category text="Color" image={moreIcon} data={<Colors />} />
            <Category text="Size" image={moreIcon} data={<Sizes />} />
            <Category
                text="Dress Style"
                image={moreIcon}
                data={[
                    <TypeItem title="Classic" />,
                    <TypeItem title="Casual" />,
                    <TypeItem title="Business" />,
                    <TypeItem title="Sport" />,
                    <TypeItem title="Elegant" />,
                    <TypeItem title="Formal (evening)" />,
                ]}
            />
        </div>
    );
};

export default Sort;
