import { NavLink } from 'react-router-dom';

const Deal = (props) => {
    return (
        <div>
            <NavLink to="/shop">
                <img src={props.image} alt={'deal ' + props.id} />
            </NavLink>
        </div>
    );
};

export default Deal;
