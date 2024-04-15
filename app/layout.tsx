'use client'
import { FC, ReactElement, ReactNode } from 'react'
import '@/app/globals.sass'
import { Provider, store } from '@/redux/index'
import i18n, { I18nextProvider } from '@/languages'
import Header from '@/components/layouts/store/header/Header'
import Footer from '@/components/layouts/store/footer/Footer'

interface IRootLayoutProps {
  children: ReactNode | ReactElement
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            {/* <Header /> */}
              {children}
            {/* <Footer /> */}
          </Provider>
        </I18nextProvider>
      </body>
    </html>
  )
}

export default RootLayout
