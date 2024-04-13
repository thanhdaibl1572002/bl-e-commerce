import i18n from 'i18next'
import { initReactI18next, I18nextProvider, useTranslation } from 'react-i18next'
import { homeVI, homeEN, homeZH } from '@/languages/store/home'
import { shopVI, shopEN, shopZH } from '@/languages/store/shop'
import { detailVI, detailEN, detailZH } from '@/languages/store/detail'
import { signupVI, signupEN, signupZH } from '@/languages/store/signup'
import { signinVI, signinEN, signinZH } from '@/languages/store/signin'
import { accountVI, accountEN, accountZH } from '@/languages/store/account'
import { cartVI, cartEN, cartZH } from '@/languages/store/cart'
import { checkoutVI, checkoutEN, checkoutZH } from '@/languages/store/checkout'
import { contactVI, contactEN, contactZH } from '@/languages/store/contact'
import { wishlistVI, wishlistEN, wishlistZH } from '@/languages/store/wishlist'
import { layoutVI, layoutEN, layoutZH } from '@/languages/store/layout'

i18n.use(initReactI18next).init({
    resources: {
        vi: {
            translation: {
                home: homeVI,
                shop: shopVI,
                detail: detailVI,
                singup: signupVI,
                signin: signinVI,
                account: accountVI,
                cart: cartVI,
                checkout: checkoutVI,
                contact: contactVI,
                wishlist: wishlistVI,
                layout: layoutVI,
            }
        },
        en: {
            translation: {
                home: homeEN,
                shop: shopEN,
                detail: detailEN,
                singup: signupEN,
                signin: signinEN,
                account: accountEN,
                cart: cartEN,
                checkout: checkoutEN,
                contact: contactEN,
                wishlist: wishlistEN,
                layout: layoutEN,
            }
        },
        zh: {
            translation: {
                home: homeZH,
                shop: shopZH,
                detail: detailZH,
                singup: signupZH,
                signin: signinZH,
                account: accountZH,
                cart: cartZH,
                checkout: checkoutZH,
                contact: contactZH,
                wishlist: wishlistZH,
                layout: layoutZH,
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