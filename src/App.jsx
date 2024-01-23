import { Routes, Route } from 'react-router-dom';
import './app.module.css';
import { HeaderPage } from './header_and_footer/header/HeaderPage';
import { HomePage } from './components/home_page/HomePage';
import { CatalogPage } from './components/catalog_page/CatalogPage';
import { DeliveryAndPaymentPage } from './components/delivery_and_payment_page/DeliveryAndPaymentPage';
import { WholesalePage } from './components/wholesale_page/WholesalePage';
import { ContactsPage } from './components/contacts_page/ContactsPage';
import { BasketPage } from './components/basket_page/BasketPage';
import { FooterPage } from './header_and_footer/footer/FooterPage';
import { MailingPage } from './header_and_footer/mailing/MailingPage';
import { PaymentPage } from './header_and_footer/payment/PaymentPage';


export const App = (props) => {

  const products = props.state.products.map(e =>
    <Route path={e.put} element={<BasketPage state={props.state} />} />
  )

  return (
    <div>
      <HeaderPage />
      <Routes>
        <Route index element={<HomePage state={props.state} />} />
        <Route path='catalog' element={<CatalogPage products={props.state.products} />} />
        <Route path='delivery_and_payment' element={<DeliveryAndPaymentPage deliveryAndPayment={props.state.deliveryAndPayment} />} />
        <Route path='wholesale' element={<WholesalePage wholesale={props.state.wholesale} />} />
        <Route path='contacts' element={<ContactsPage />} />
        {/* <Route path='basket' element={<BasketPage />} /> */}
        {products}
      </Routes>
      <MailingPage />
      <FooterPage state={props.state} />
      <PaymentPage state={props.state.headerAndFooter} />
    </div>
  )
}