'use client'
import { FC } from 'react'
import styles from '@/app/shop/shop.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import ProductGrid from '@/components/pages/store/shop/ProductGrid'

interface IShopProps {
  
}

const Shop: FC<IShopProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()
  
  return (
    <main className={styles[`_container__${theme}`]}>
      <ProductGrid />
    </main>
  )
}

export default Shop