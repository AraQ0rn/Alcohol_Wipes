import style from './footer.module.css'

export const FooterPage = (props) => {
    
    const mail = props.state.headerAndFooter.footer.mail
    const whatsapp = props.state.headerAndFooter.footer.whatsapp
    const telegram = props.state.headerAndFooter.footer.telegram


    const name = props.state.products.map(product => (
        <p className={style.footer_products_p}>
            <a className={style.footer_products_link} href={product.put}>{product.name}</a>
        </p>
    ))

    debugger
    return (
        <div className={style.container}>
            <div className={style.footer}>
                <div>
                    <h2 className={style.footer_company_h2}>О компании</h2>
                    <p className={style.footer_company_p1}>Компания </p>
                    <p className={style.footer_company_p2}>ООО «ТД ВИТАОН-НН»</p>
                    <p className={style.footer_company_p3}>Юридический адрес: 606000,</p>
                    <p className={style.footer_company_p4}>г. Дзержинск, ул. Лермонтова 18ш </p>
                </div>
                <div>
                    <h2 className={style.footer_products_h2}>Продукция</h2>
                    {name}
                </div>
                <div>
                    <h2 className={style.footer_contacts_h2}>
                        <a className={style.footer_contacts_tel} href='tel: +78888888888' >+7(888)888-88-88</a>
                    </h2>
                    <div className={style.footer_contacts_container}>
                        <div className={style.footer_contacts_container_email}>
                            <div>
                                <img className={style.footer_contacts_container_email_img} src={mail} alt='#' />
                            </div>
                            <div>
                                <a className={style.footer_contacts_container_email_link} href='mailto: director@aintiseptic-nn.ru'>director@aintiseptic-nn.ru</a>
                            </div>
                        </div>
                        <div className={style.footer_contacts_messages}>
                            <div>
                                <img className={style.footer_contacts_message_whatsapp} src={whatsapp} alt="#" />
                            </div>
                            <div>
                                <img src={telegram} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}