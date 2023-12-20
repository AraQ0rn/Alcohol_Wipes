import style from './homePage.module.css'
import {WholesalePage} from '../wholesale_page/WholesalePage'
import { DeliveryAndPaymentPage } from '../delivery_and_payment_page/DeliveryAndPaymentPage'

export const HomePage = (props) => {

    return (
    <>
    <h2>Главная</h2>
    <WholesalePage wholesale={props.state.wholesale}  />
    <DeliveryAndPaymentPage deliveryAndPayment={props.state.deliveryAndPayment}  />
    </>
    )
}