import i18n from 'i18next'
import { initReactI18next, I18nextProvider, useTranslation } from 'react-i18next'
import { shopVI, shopEN, shopZH } from '@/languages/shop'

i18n.use(initReactI18next).init({
    resources: {
        vi: {
            translation: {
                shop: shopVI
            }
        },
        en: {
            translation: {
                shop: shopEN
            }
        },
        zh: {
            translation: {
                shop: shopZH
            }
        }
    },
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export { I18nextProvider, useTranslation }

export default i18n