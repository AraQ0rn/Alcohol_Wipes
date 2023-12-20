import style from './homePage.module.css'
import { WholesalePage } from '../wholesale_page/WholesalePage'
import { DeliveryAndPaymentPage } from '../delivery_and_payment_page/DeliveryAndPaymentPage'
import { CatalogPage } from '../catalog_page/CatalogPage'

export const HomePage = (props) => {

    return (
        <div>

            <div>
                <CatalogPage products={props.state.products} />
            </div>
            <WholesalePage wholesale={props.state.wholesale} />
            <DeliveryAndPaymentPage deliveryAndPayment={props.state.deliveryAndPayment} />
        </div>
    )
}