'use client'
import { FC, ReactElement, ReactNode } from 'react'
import '@/app/globals.sass'

interface IRootLayoutProps {
  children: ReactNode | ReactElement
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
