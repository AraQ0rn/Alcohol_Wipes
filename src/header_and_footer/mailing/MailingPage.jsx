import style from './mailingPage.module.css'

export const MailingPage = () => {

    return (
        <div className={style.mailing}>
            <div className={style.container}>
                <div>
                    <h1 className={style.mailing_text_h1}>Подпишитесь на нашу рассылку</h1>
                    <p className={style.mailing_text_p}>Выгодные предложения и скидки </p>
                </div>
                <div className={style.mailing_sending}>
                    <div>
                        <input className={style.mailing_sending_inputs_input} placeholder='Ваш Email' />
                    </div>
                    <div>
                        <button className={style.mailing_sending_buttons_button}>Подписаться</button>
                    </div>
                </div>
            </div>
        </div>
    )
}