import { NavLink } from 'react-router-dom'
import style from './headerPage.module.css'

export const HeaderPage = () => {

    return (<>
        <div>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='catalog'>Каталог</NavLink>
            <NavLink to='delivery_and_payment' >Доставка и оплата</NavLink>
            <NavLink to='wholesale'>Опт</NavLink>
            <NavLink to='contacts'>Контакты</NavLink>
            <NavLink to='basket'>Корзина</NavLink>
            <a>+7(888)888-88-88</a>
        </div>
    </>
    )
}