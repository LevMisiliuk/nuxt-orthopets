import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages: {
            en: {
                sidebar: {
                    map: 'Map',
                    list: 'List of orthopedists',
                    learning: 'Training',
                    conferences: 'Conferences'
                },
                conference: 'Download conference file 2023',
                header: "Orthopedic-Neurosurgical Veterinary Association of Ukraine 'Ortopets'",
                map: {
                    header: 'Map of certified orthopedists and neurosurgeons in Ukraine',
                    subtitle: 'Quick and easy search for a specialist in the right area',
                },
                card: {
                    button: 'Read more',
                }
            },
            ua: {
                sidebar: {
                    map: 'Мапа',
                    list: 'Список ортопедів',
                    learning: 'Навчання',
                    conferences: 'Конференції'
                },
                conference: 'Завантажити файл конференції 2023',
                header: 'Ортопедичне-нейрохірургічне ветеринарне співтовариство України "Ortopets"',
                map: {
                    header: 'Карта сертифікованих ортопедів та нейрохірургів України',
                    subtitle: 'Швидкий та зручний пошук спеціаліста з потрібної місцевості',
                },
                card: {
                    button: 'Докладніше',
                }
            }
        }
    })

    vueApp.use(i18n)
})