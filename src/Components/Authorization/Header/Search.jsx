import './Search.css';
import SearchIcon from './../../../img/header/search.svg';

function Search() {
    return (
        <div className="button">
            <img className="icon" src={SearchIcon} alt="icon"></img>
            <input type="text" placeholder="Search" />
        </div>
    );
}

export default Search;
