import style from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button className={style.button}>
                <div>
                    <img src={props.image_btn} alt="social_img" />
                </div>
                <div>
                    <p>Continue With {props.text}</p>
                </div>
            </button>
        </div>
    );
};

export default Button;
