import { NavLink } from 'react-router-dom'
import style from './catalogPage.module.css'


export const CatalogPage = (props) => {

    const product = props.products.map(p =>
    (
        <div className={style.catalog_product}>
            <img src={p.img} alt='#' />
            <div className={style.catalog_product_div_h2}>
                <h2 className={style.catalog_product_h2}>{p.name}</h2>
            </div>
            <div>
                <button className={style.catalog_product_button_15}>15</button>
                <button className={style.catalog_product_button_20}>20</button>
                <button className={style.catalog_product_button_30}>30</button>
            </div>
            <p className={style.catalog_product_p}>{p.price}</p>
            <a href={p.put} className={style.catalog_product_a}>Узнать о товаре</a>
        </div >
    )
    )

    return (
        <div className={style.catalog}>
            <div className={style.container}>
                <h2 className={style.catalog_h2}>Продукция Clinija</h2>
                <div className={style.catalog_products}>
                    {product}
                </div>
            </div>
        </div>
    )
}