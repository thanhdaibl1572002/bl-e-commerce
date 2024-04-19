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
    link: '#',
    imageSrc: '/images/category-1.jpeg',
    title: 'Điện thoại',
  },
  {
    link: '#',
    imageSrc: '/images/category-2.jpeg',
    title: 'Laptop',
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
    title: 'Phụ kiện Laptop',
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
        <div className={styles._tool}>
          <div></div>
          <div>
            <Button
              width={38}
              height={38}
              icon={<PiFunnel />}
              iconSize={21}
              iconColor={themeColors[theme]}
              background={whiteColor}
              animateDuration={400}
              boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
              bubbleColor={themeColors[theme]}
              onClick={() => {
                if (filterRef.current) {
                  filterRef.current.style.left = '0'
                }
              }}
            />
            <Button
              width={38}
              height={38}
              icon={<PiFunnel />}
              iconSize={21}
              iconColor={themeColors[theme]}
              background={whiteColor}
              animateDuration={400}
              boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
              bubbleColor={themeColors[theme]}
              onClick={() => {
                if (filterRef.current) {
                  filterRef.current.style.left = '0'
                }
              }}
            />
          </div>
        </div>
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