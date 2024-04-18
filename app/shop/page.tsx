'use client'
import { FC } from 'react'
import styles from '@/app/shop/shop.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import ProductGrid from '@/components/pages/store/shop/ProductGrid'
import ProductFilter from '@/components/pages/store/shop/ProductFilter'
import ProductTag from '@/components/pages/store/shop/ProductTag'
import ProductCategory from '@/components/pages/store/shop/ProductCategory'
import ProductBrand from '@/components/pages/store/shop/ProductBrand'

const sampleCategories = [
  {
    link: '#',
    imageSrc: '/images/category-1.jpeg',
    title: 'Điện thoại',
  },
  {
    link: '#',
    imageSrc: '/images/category-2.jpeg',
    title: 'Máy tính xách tay',
  },
  {
    link: '#',
    imageSrc: '/images/category-3.jpeg',
    title: 'Máy tính bảng',
  },
  {
    link: '#',
    imageSrc: '/images/category-4.jpeg',
    title: 'Đồng hồ',
  },
  {
    link: '#',
    imageSrc: '/images/category-5.jpeg',
    title: 'Phụ kiện điện thoại',
  },
  {
    link: '#',
    imageSrc: '/images/category-6.jpeg',
    title: 'Phụ kiện máy tính',
  },
]

const sampleBrands = [
  {
    link: '#',
    imageSrc: '/images/brand-1.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-2.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-3.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-4.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-5.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-6.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-7.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-8.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-9.png',
  },
  {
    link: '#',
    imageSrc: '/images/brand-10.png',
  },
  {
    link: '#',
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

  return (
    <main className={styles[`_container__${theme}`]}>
      <section className={styles._top}>
        <h2>Danh mục</h2>
        <ProductCategory categories={sampleCategories} />
        <h2>Thương hiệu</h2>
        <ProductBrand brands={sampleBrands} />
      </section>
      <section className={styles._bottom}>
        <h2>Sản phẩm</h2>
        <div className={styles._content}>
          {/* <div className={styles._content__left}>
            <ProductFilter />
          </div> */}
          <div className={styles._content__right}>
            <ProductGrid />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop