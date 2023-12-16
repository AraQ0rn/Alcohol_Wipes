import { Routes, Route } from 'react-router-dom';
import './app.module.css';
import { HeaderPage } from './header_and_footer/HeaderPage';
import { HomePage } from './components/home_page/HomePage';
import { CatalogPage } from './components/catalog_page/CatalogPage';
import { DeliveryAndPaymentPage } from './components/delivery_and_payment_page/DeliveryAndPaymentPage';
import { WholesalePage } from './components/wholesale_page/WholesalePage';
import { ContactsPage } from './components/contacts_page/ContactsPage';
import { BasketPage } from './components/basket_page/BasketPage';
import { FooterPage } from './header_and_footer/FooterPage';


export const App = () => {
  return (
    <div>
      <HeaderPage />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='catalog' element={<CatalogPage />} />
        <Route path='delivery_and_payment' element={<DeliveryAndPaymentPage />} />
        <Route path='wholesale' element={<WholesalePage/> } />
        <Route path='contacts' element={<ContactsPage/> } />
        <Route path='basket' element={<BasketPage/> } />
      </Routes>
      <FooterPage/>
    </div>
  )
}