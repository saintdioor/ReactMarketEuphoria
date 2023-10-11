import style from './../Profile.module.css';
import Navigation from './../Navigation';
import Data from './Data';

const AddAddress = (props) => {
    return (
        <div className={style.page}>
            <Navigation name={props.dataUser.name} />
            <Data />
        </div>
    );
};

export default AddAddress;
