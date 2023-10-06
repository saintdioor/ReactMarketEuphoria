import style from './InputInfoDelivery.module.css'

const InputInfoDelivery = (props) => {
    return (
        <div>
           <p className={style.name}>{props.name}</p>
           <div className={style.description}>
                <textarea id={props.id} className={style.data} placeholder={props.description}></textarea>
           </div>
        </div>
    )
}

export default InputInfoDelivery;