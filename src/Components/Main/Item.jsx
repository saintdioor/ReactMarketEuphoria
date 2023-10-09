import photo from "./../../img/item_1.png";
import style from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={style.card}>
      <img src={photo} alt="" />
      <div className={style.description}>
        <div className={style.text}>
          <h3>{props.name}</h3>
          <p>Explore Now!</p>
        </div>
        <button>&#8594;</button>
      </div>
    </div>
  );
};

export default Item;
