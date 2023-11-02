import Color from './Color';
import style from './Colors.module.css';

const Colors = () => {
    return (
        <div className={style.colors}>
            <Color color="Purple" />
            <Color color="Black" />
            <Color color="Red" />
            <Color color="Orange" />
            <Color color="Navy" />
            <Color color="White" />
            <Color color="Brown" />
            <Color color="Green" />
            <Color color="Yellow" />
            <Color color="Grey" />
            <Color color="Pink" />
            <Color color="Blue" />
        </div>
    );
};

export default Colors;
