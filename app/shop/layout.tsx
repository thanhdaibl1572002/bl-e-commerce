'use client'
import { FC, ReactElement, ReactNode } from 'react'
import Header from '@/components/layouts/store/header/Header'
import Footer from '@/components/layouts/store/footer/Footer'

interface IShopLayoutProps {
    children: ReactNode | ReactElement
}

const ShopLayout: FC<IShopLayoutProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default ShopLayout