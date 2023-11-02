import style from './../Profile/Profile.module.css';
import Navigation from '../Profile/Navigation';
import Orders from './Orders'

const OrdersPage = (props) => {
    return (
        <div className={style.page}>
            <Navigation />
            <Orders data={props.data}/>
        </div>
    );
};

export default OrdersPage;
