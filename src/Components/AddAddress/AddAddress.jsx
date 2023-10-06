import style from './Profile.module.css'
import Navigation from '../Profile/Navigation'
import Data from './Data'

const AddAddress = (props) => {
    return (
        <div className={style.page}>
            <Navigation name={'Yaroslav'}/>
            <Data/>
        </div>
    )
}

export default AddAddress;