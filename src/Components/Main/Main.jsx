import BrandsDeal from "./BrandsDeal";
import Categories from "./Categories";
import BigSaveZone from "./BigSavingZone";
import style from "./Main.module.css";
import banner from "./../../img/banner.png";
import { NavLink } from "react-router-dom";

const Main = (props) => {
  return (
    <div className={style.content}>
      <div>Карусель</div>
      <BigSaveZone />
      <div className={style.banner}>
        <img src={banner} alt="" />
        <div>
          <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
          <p>
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <NavLink to="/shop">
            <button className={style.button}>Shop Now</button>
          </NavLink>
        </div>
      </div>
      <Categories title={"Men"} data={props.men} />
      <Categories title={"Women"} data={props.women} />
      <BrandsDeal />
    </div>
  );
};

export default Main;
