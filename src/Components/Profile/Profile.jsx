import style from './Profile.module.css';
import Navigation from './Navigation';
import Data from './Data';

function Profile(props) {
    return (
        <div className={style.page}>
            <Navigation/>
            <Data dataAddress={props.dataAddress} />
        </div>
    );
}

export default Profile;
