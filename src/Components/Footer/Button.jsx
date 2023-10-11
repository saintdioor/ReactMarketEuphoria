import './Button.css';

function Button(props) {
    return (
        <div className="button-link-social">
            <img src={props.src} alt='icon-social'></img>
        </div>
    );
}

export default Button;
