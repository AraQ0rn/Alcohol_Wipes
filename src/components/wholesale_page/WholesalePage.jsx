import style from './wholesale.module.css'

export const WholesalePage = (props) => {

    return (
        <div className={style.container}>
            <div>
                <img src={props.wholesale.img} alt='#' />
            </div>
            <div className={style.wholesale_text}>
                <h2 className={style.wholesale_text_h2}>Для закупки оптовых партий антибактериальных салфеток Clinija</h2>
                <p className={style.wholesale_text_p}>Оставьте свои контакты и с вами свяжется наш менеджер</p>
                <div>
                    <input className={style.wholesale_text_tel} placeholder='Телефон' />
                </div>
                <div>
                    <input className={style.wholesale_text_mail} placeholder='Ваш Email' />
                </div>
                <button className={style.wholesale_text_btn}>Оставить заявку</button>
            </div>
        </div>
    )
}