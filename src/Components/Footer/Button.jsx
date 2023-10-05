import './Button.css'

function Button(props) {
    return(
        <div className='button-link-social'>
            <img src={props.src}></img>
        </div>
    );
}

export default Button;