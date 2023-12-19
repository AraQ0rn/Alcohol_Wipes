import style from './payment.module.css'


export const PaymentPage = (props) => {

    const images = props.state.payment.map(img => (
        <div className={style.payment_images}>
            <img src={img.img} alt='#' />
        </div>
    ))


    return (
        <div className={style.payment}>
            <div className={style.container}>
                {images}
            </div>
        </div>
    )
}