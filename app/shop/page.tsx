'use client'
import { FC, useEffect, useRef } from 'react'
import styles from '@/app/shop/shop.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import ProductGrid from '@/components/pages/store/shop/ProductGrid'
import ProductFilter from '@/components/pages/store/shop/ProductFilter'
import ProductTag from '@/components/pages/store/shop/ProductTag'
import ProductCategory from '@/components/pages/store/shop/ProductCategory'
import ProductBrand from '@/components/pages/store/shop/ProductBrand'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'
import { PiFunnel } from 'react-icons/pi'

const sampleCategories = [
  {
    name: 'Điện thoại',
    imageSrc: '/images/category-1.jpeg',
    title: 'Điện thoại',
  },
  {
    name: 'Laptop',
    imageSrc: '/images/category-2.jpeg',
    title: 'Laptop',
  },
  {
    name: 'Máy tính bảng',
    imageSrc: '/images/category-3.jpeg',
    title: 'Máy tính bảng',
  },
  {
    name: 'Đồng hồ',
    imageSrc: '/images/category-4.jpeg',
    title: 'Đồng hồ',
  },
  {
    name: 'Phụ kiện điện thoại',
    imageSrc: '/images/category-5.jpeg',
    title: 'Phụ kiện điện thoại',
  },
  {
    name: 'Phụ kiện Laptop',
    imageSrc: '/images/category-6.jpeg',
    title: 'Phụ kiện Laptop',
  },
]

const sampleBrands = [
  {
    name: 'xiaomi',
    imageSrc: '/images/brand-1.png',
  },
  {
    name: 'apple',
    imageSrc: '/images/brand-2.png',
  },
  {
    name: 'samsung',
    imageSrc: '/images/brand-3.png',
  },
  {
    name: 'vivo',
    imageSrc: '/images/brand-4.png',
  },
  {
    name: 'oppo',
    imageSrc: '/images/brand-5.png',
  },
  {
    name: 'asus',
    imageSrc: '/images/brand-6.png',
  },
  {
    name: 'acer',
    imageSrc: '/images/brand-7.png',
  },
  {
    name: 'msi',
    imageSrc: '/images/brand-8.png',
  },
  {
    name: 'dell',
    imageSrc: '/images/brand-9.png',
  },
  {
    name:'lenovo',
    imageSrc: '/images/brand-10.png',
  },
  {
    name:'anker',
    imageSrc: '/images/brand-11.png',
  },
]

interface IShopProps {

}

const Shop: FC<IShopProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()

  const filterRef = useRef<HTMLDivElement>(null)

  return (
    <main className={styles[`_container__${theme}`]}>
      <section className={styles._categories}>
        <h2>Danh mục</h2>
        <ProductCategory categories={sampleCategories} />
      </section>
      <section className={styles._brands}>
        <h2>Thương hiệu</h2>
        <ProductBrand brands={sampleBrands} />
      </section>
      <section className={styles._products}>
        <h2>Sản phẩm</h2>
        <div className={styles._content}>
          <div className={styles._filter} ref={filterRef}>
            <ProductFilter />
          </div>
          <div className={styles._grid}>
            <ProductGrid />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop