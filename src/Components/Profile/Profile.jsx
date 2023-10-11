import style from './Profile.module.css';
import Navigation from './Navigation';
import Data from './Data';

function Profile(props) {
    return (
        <div className={style.page}>
            <Navigation name={props.dataUser.name} />
            <Data dataUser={props.dataUser} dataAddress={props.dataAddress} />
        </div>
    );
}

export default Profile;
