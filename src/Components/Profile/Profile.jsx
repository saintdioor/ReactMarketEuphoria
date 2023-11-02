import style from './Profile.module.css';
import Navigation from './Navigation';
import Data from './Data';

function Profile() {
    return (
        <div className={style.page}>
            <Navigation/>
            <Data/>
        </div>
    );
}

export default Profile;
