import './Download.css';

function Download(props) {
    return (
        <div className="download-link">
            <img src={props.src} alt='icon-link-download'></img>
        </div>
    );
}

export default Download;
