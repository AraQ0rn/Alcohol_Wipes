import productsCar_15 from '../images/productsCar_15.png'
import productsAntiseptic_15 from '../images/productsAntiseptic_15.png'
import productsUniversal_15 from '../images/productsUniversal_15.png'
import productsHome_15 from '../images/productsHome_15.png'
import productsPlastic_15 from '../images/productsPlastic_15.png'
import productsGlass_15 from '../images/productsGlass_15.png'

import detailedProductsCar_15 from '../images/detailedProductsCar_15.png'
import detailedProductsAntiseptic_15 from '../images/detailedProductsAntiseptic_15.png'
import detailedProductsUniversal_15 from '../images/detailedProductsUniversal_15.png'
import detailedProductsHome_15 from '../images/detailedProductsHome_15.png'
import detailedProductsPlastic_15 from '../images/detailedProductsPlastic_15.png'
import detailedProductsGlass_15 from '../images/detailedProductsGlass_15.png'

import footerMail from '../images/footer_mail.png'
import footerWhatsapp from '../images/footer_whatsapp.png'
import footerTelegram from '../images/footer_telegram.png'

import paymentVisa from '../images/payment_visa.png'
import paymentMastercard from '../images/payment_mastercard.png'
import paymentIpay from '../images/payment_ipay.png'
import paymentGpay from '../images/payment_gpay.png'

import wholesale from '../images/wholesale.png'

import delivery from '../images/delivery_img.png'
import payment from '../images/payment_img.png'


export const store = {
    _state: {
        products: [
            {
                id: 1,
                img: productsCar_15,
                name: 'Универсальные салфетки для автомобиля',
                price: 1 + ' рублей',
                put: '/Universal_wipes_for_the_car'
            },
            {
                id: 2,
                img: productsAntiseptic_15,
                name: 'Антисептические салфетки',
                price: 2 + ' рублей',
                put: '/Antiseptic_wipes'
            },
            {
                id: 3,
                img: productsUniversal_15,
                name: '«Универсальные» салфетки с Антибактериальным эффектом ',
                price: 3 + ' рублей',
                put: '/"Universal"_wipes_with_Antibacterial_effect'
            },
            {
                id: 4,
                img: productsHome_15,
                name: 'Салфетки универсальные для дома',
                price: 4 + ' рублей',
                put: '/Napkins_are_universal_for_the_home'
            },
            {
                id: 5,
                img: productsPlastic_15,
                name: 'Салфетки для пластика',
                price: 5 + ' рублей',
                put: '/Napkins_for_plastic'
            },
            {
                id: 6,
                img: productsGlass_15,
                name: 'Салфетки для стекла',
                price: 6 + ' рублей',
                put: '/Napkins_for_glass'
            }
        ],
        detailedProducts: [
            {
                id: 1,
                img: detailedProductsCar_15,
                name: 'Универсальные салфетки для автомобиля',
                description: 'Автомобильные салфетки «Clinija» отлично очищают от грязи и пыли зеркала, стёкла и пластик Вашего автомобиля за счёт применения лучшего антисептического и антибактериального эффекта этилового спирта. Салфетки гипаллергенны, убивают 99,9% всех бактерий. Не оставляют на панели разводов и ворсинок; создаёт защитную противопылевую пленку. Незаменимое средство для гаража, мастерской, дачи.',
                structure: 'нетканный материал,  размер салфетки 150х170 мм, дименерализованная вода, спирт этиловый 75%, глицерин, перекись водорода, отдушка, консервант',
                storageConditions: 'хранить в сухом недоступном для детей месте от -10 до +25, и относительной влажности не более 75%. ',
                expirationDate: 'Срок годности 36 месяцев',
                price: 1 + ' рублей',
            },
            {
                id: 2,
                img: detailedProductsAntiseptic_15,
                name: 'Антисептические салфетки',
                description: 'Влажные антисептические салфетки «Clinija»  эффективно и бережно очищают, смягчают, увлажняют и тонизируют кожу рук. Создают ощущение свежести, обладают антибактериальными свойствами. Безупречны для ежедневного ухода и незаменимы во время поездок. Изготовлены из гипоаллергенного материала.',
                structure: 'нетканный материал,  размер салфетки 150х170 мм, дименерализованная вода, спирт этиловый 75%, глицерин, перекись водорода, отдушка, консервант',
                storageConditions: 'хранить в сухом недоступном для детей месте от -10 до +25, и относительной влажности не более 75%. ',
                expirationDate: 'Срок годности 36 месяцев',
                price: 2 + ' рублей',
            },
            {
                id: 3,
                img: detailedProductsUniversal_15,
                name: '«Универсальные» салфетки с Антибактериальным эффектом',
                description: 'Влажные антибактериальные салфетки «Clinija» позволят Вам удалить загрязнения с любых поверхностей, мягко очищают кожу и ухаживают за ней, поддерживая естественный PH- баланс.. Салфетки не вызывают аллергических реакций. Убивают 99,9% бактерий.  Так же помогут Вам очистить всевозможные поверхности в доме, провести  влажную уборку от пыли в доме, на кухне, в ванной комнате, в туалете, дезинфекции любых поверхностей и антибактериальной обработки кожи. После использования салфеток на коже и поверхностей остаётся ощущение свежести и приятный аромат.',
                structure: 'нетканный материал,  размер салфетки 150х170 мм, дименерализованная вода, спирт этиловый 75%, глицерин, перекись водорода, отдушка, консервант',
                storageConditions: 'хранить в сухом недоступном для детей месте от -10 до +25, и относительной влажности не более 75%. ',
                expirationDate: 'Срок годности 36 месяцев',
                price: 3 + ' рублей',
            },
            {
                id: 4,
                img: detailedProductsHome_15,
                name: 'Салфетки универсальные для дома',
                description: 'Салфетки для уборки «Clinija» помогут Вам очистить всевозможные поверхности в доме, провести  влажную уборку от пыли в доме, на кухне, в ванной комнате, в туалете, дезинфекции любых поверхностей и антибактериальной обработки кожи.',
                structure: 'нетканный материал,  размер салфетки 150х170 мм, дименерализованная вода, спирт этиловый 75%, глицерин, перекись водорода, отдушка, консервант',
                storageConditions: 'хранить в сухом недоступном для детей месте от -10 до +25, и относительной влажности не более 75%. ',
                expirationDate: 'Срок годности 36 месяцев',
                price: 4 + ' рублей',
            },
            {
                id: 5,
                img: detailedProductsPlastic_15,
                name: 'Салфетки для пластика',
                description: 'Салфетки для пластика «Clinija» быстро и эффективно удаляют с любых поверхностей свежие загрязнения от пищевых продуктов, фруктов, кофе, чая, чернил. Облегчают последующее выведение загрязнений при стирке. Не заменимы в дороге, в ресторане, школе, офисе, в автомобиле. Безопасны для кожи рук. Гипаллергенны.',
                structure: 'нетканный материал,  размер салфетки 150х170 мм, дименерализованная вода, спирт этиловый 75%, глицерин, перекись водорода, отдушка, консервант',
                storageConditions: 'хранить в сухом недоступном для детей месте от -10 до +25, и относительной влажности не более 75%. ',
                expirationDate: 'Срок годности 36 месяцев',
                price: 5 + ' рублей',
            },
            {
                id: 6,
                img: detailedProductsGlass_15,
                name: 'Салфетки для стекла',
                description: 'Салфетки для стекла «Clinija» помогут Вам быстро и качественно очистить стеклянные поверхности гаджетов, оптики, автомобильного стекла и других стеклянных поверхностей от большинства загрязнений, устраняет следы пальцев, пыли, любые пятна в одно касание, поместится в любой футляр и сумку. И что самое главное, салфетка не царапает и не повреждает стеклянную поверхность, очищает эффективно и бережно! Безопасны для кожи рук. Гипаллергенны.',
                structure: 'нетканный материал,  размер салфетки 150х170 мм, дименерализованная вода, спирт этиловый 75%, глицерин, перекись водорода, отдушка, консервант',
                storageConditions: 'хранить в сухом недоступном для детей месте от -10 до +25, и относительной влажности не более 75%. ',
                expirationDate: 'Срок годности 36 месяцев',
                price: 6 + ' рублей',
            }
        ],
        headerAndFooter: {
            footer: {
                mail: footerMail,
                whatsapp: footerWhatsapp,
                telegram: footerTelegram
            },
            payment: [
                {
                    img: paymentVisa
                },
                {
                    img: paymentMastercard
                },
                {
                    img: paymentIpay
                },
                {
                    img: paymentGpay
                }
            ]
        },
        wholesale: {
            img: wholesale
        },
        deliveryAndPayment: {
            deliveryImg: delivery,
            paymentImg: payment
        },
    }
}