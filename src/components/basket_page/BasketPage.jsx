import { NavLink } from 'react-router-dom'
import style from './basket.module.css'

export const BasketPage = (props) => {

    const basket = props.state.detailedProducts.map(e => (
        <NavLink to={e.put} ><img src={e.img} /></NavLink>

    ))

    return basket
}