import style from './payment.module.css'
import { store } from '../../redux/test-store'


export const PaymentPage = () => {


    const images = store._state.payment.map(img => (
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