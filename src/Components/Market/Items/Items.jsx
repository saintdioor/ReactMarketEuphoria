import style from './Items.module.css';
import Item from './Item';
import img1 from './../../../img/women/item1.png';
import img2 from './../../../img/women/item2.png';
import img3 from './../../../img/women/item3.png';
import img4 from './../../../img/women/item4.png';
import img5 from './../../../img/women/item5.png';
import img6 from './../../../img/women/item6.png';
import img7 from './../../../img/women/item7.png';
import img8 from './../../../img/women/item8.png';
import img9 from './../../../img/women/item9.png';
import img10 from './../../../img/women/item10.png';
import img11 from './../../../img/women/item11.png';
import img12 from './../../../img/women/item12.png';
const Items = () => {
    return (
        <div className={style.block}>
            <div className={style.head}>
                <div className={style.left}>
                    <p>Women's Clothing</p>
                </div>
                <div className={style.right}>
                    <p>New</p>
                    <p>Recommended</p>
                </div>
            </div>
            <div className={style.content}>
                <Item
                    image={img1}
                    id={'1'}
                    text={'Black Sweatshirt with ....'}
                    brand={'Jhanvi’s  Brand'}
                    price={'123'}
                />
                <Item
                    image={img2}
                    id={'2'}
                    text={'White T-shirt'}
                    brand={'Helen’s  Brand'}
                    price={'11'}
                />
                <Item
                    image={img3}
                    id={'3'}
                    text={'Levender Hoodie with ....'}
                    brand={'Nike’s  Brand'}
                    price={'119'}
                />
                <Item
                    image={img4}
                    id={'4'}
                    text={'Leaves Pattern White...'}
                    brand={'paypal’s  Brand'}
                    price={'77'}
                />
                <Item
                    image={img5}
                    id={'5'}
                    text={'White Graphic Crop Top'}
                    brand={'woden’s  Brand'}
                    price={'29'}
                />
                <Item
                    image={img6}
                    id={'6'}
                    text={'Black Shorts'}
                    brand={'MM’s  Brand'}
                    price={'37'}
                />
                <Item
                    image={img7}
                    id={'7'}
                    text={'Barboreal Gray Sweats...'}
                    brand={'Priya’s  Brand'}
                    price={'77'}
                />
                <Item
                    image={img8}
                    id={'8'}
                    text={'Yellow Sweatshirt'}
                    brand={'woden’s  Brand'}
                    price={'29'}
                />
                <Item
                    image={img9}
                    id={'9'}
                    text={'Flower Pattern Black C...'}
                    brand={'MM’s  Brand'}
                    price={'37'}
                />
                <Item
                    image={img10}
                    id={'10'}
                    text={'I Don’t Graphic T-shirt '}
                    brand={'Nisargi’s  Brand'}
                    price={'77'}
                />
                <Item
                    image={img11}
                    id={'11'}
                    text={'Blue Flower Print Crop ....'}
                    brand={'Mellon’s  Brand'}
                    price={'29'}
                />
                <Item
                    image={img12}
                    id={'12'}
                    text={'line Pattern Black H...'}
                    brand={'AS’s  Brand'}
                    price={'37'}
                />
            </div>
        </div>
    );
};

export default Items;
