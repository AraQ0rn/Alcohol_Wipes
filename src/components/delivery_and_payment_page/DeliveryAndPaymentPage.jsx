import style from './deliveryAndPayment.module.css'

export const DeliveryAndPaymentPage = (props) => {

    return (
        <div className={style.container}>
            <h2 className={style.deliveryAndPayment_h2}>Доставка и оплата</h2>
            <p className={style.deliveryAndPayment_p}>Одно из преимуществ нашего времени – это возможности доставки и современные способы оплаты.</p>
            <div className={style.deliveryAndPayment_container}>
                <div className={style.delivery}>
                    <div className={style.delivery_images}>
                        <img className={style.delivery_images_image} src={props.deliveryAndPayment.deliveryImg} alt='#' />
                    </div>
                    <div className={style.delivery_text}>
                        <h2 className={style.delivery_text_h2}>Способы доставки</h2>
                        <p className={style.delivery_text_p1}>При заказе в города РФ</p>
                        <p className={style.delivery_text_p2}>Самовывоз из Почты России, ТК СДЭК, (срок доставки до Почты России ~3-7 дней)</p>
                        <p className={style.delivery_text_p3}>Курьерская доставка до двери ТК СДЭК, (срок доставки до Почты России ~2-7 дней)</p>
                    </div>
                </div>
                <div className={style.payment}>
                    <div className={style.payment_images}>
                        <img className={style.payment_images_image} src={props.deliveryAndPayment.paymentImg} alt='#' />
                    </div>
                    <div className={style.payment_text}>
                        <h2 className={style.payment_text_h2}>Способы оплаты</h2>
                        <p className={style.payment_text_p1}>При заказе по РФ онлайн</p>
                        <p className={style.payment_text_p2}>- Банковской картой,</p>
                        <p className={style.payment_text_p3}>- Apple Pay, Google Pay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}