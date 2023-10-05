import './Search.css'
import SearchIcon from './../../img/search.svg'

function Search() {
    return(
        <div className='button'>
            <img className='icon' src={SearchIcon}></img>
            <input type="text" placeholder='Search'/>
        </div>
    );
}

export default Search;