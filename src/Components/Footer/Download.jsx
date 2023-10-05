import './Download.css'

function Download(props) {
    return(
        <div className='download-link'>
            <img src={props.src}></img>
        </div>
    );
}

export default Download;