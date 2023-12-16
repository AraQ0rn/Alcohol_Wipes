import { NavLink } from 'react-router-dom'
import style from './headerPage.module.css'

export const HeaderPage = () => {

    const active = (ev) => ev.isActive ? style.active : style.link

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.links}>
                    <div>
                        <NavLink className={active} to='/'>Главная</NavLink>
                    </div>
                    <div>
                        <NavLink className={active} to='catalog'>Каталог</NavLink>
                    </div>
                    <div>
                        <NavLink className={active} to='delivery_and_payment' >Доставка и оплата</NavLink>
                    </div>
                    <div>
                        <NavLink className={active} to='wholesale'>Опт</NavLink>
                    </div>
                    <div>
                        <NavLink className={active} to='contacts'>Контакты</NavLink>
                    </div>
                    <div>
                        <NavLink className={active} to='basket'>Корзина</NavLink>
                    </div>
                </div>
                <div>
                    <a className={style.tel} href="tel: +78888888888">+7(888)888-88-88</a>
                </div>
            </div>
        </div>
    )
}