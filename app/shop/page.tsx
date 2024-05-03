'use client'
import { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import styles from '@/app/shop/shop.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import ProductGrid from '@/components/pages/store/shop/ProductGrid'
import ProductFilter, { IProductFilterProps } from '@/components/pages/store/shop/ProductFilter'
import ProductCategory from '@/components/pages/store/shop/ProductCategory'
import ProductBrand from '@/components/pages/store/shop/ProductBrand'
import Button from '@/components/forms/Button'
import { blackGradientColor, blueGradientColor, getColorLevel, greenGradientColor, redGradientColor, themeColors, whiteColor, whiteGradientColor, yellowGradientColor } from '@/variables/variables'
import { PiFaders } from 'react-icons/pi'
import Select from '@/components/forms/Select'
import ProductTool from '@/components/pages/store/shop/ProductTool'
import { ProductProvider } from '@/components/pages/store/shop/ProductContext'

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
    imageSrc: '/images/brand-1-removebg-preview.png',
  },
  {
    name: 'apple',
    imageSrc: '/images/brand-2-removebg-preview.png',
  },
  {
    name: 'samsung',
    imageSrc: '/images/brand-3-removebg-preview.png',
  },
  {
    name: 'vivo',
    imageSrc: '/images/brand-4-removebg-preview.png',
  },
  {
    name: 'oppo',
    imageSrc: '/images/brand-5-removebg-preview.png',
  },
  {
    name: 'asus',
    imageSrc: '/images/brand-6-removebg-preview.png',
  },
  {
    name: 'acer',
    imageSrc: '/images/brand-7-removebg-preview.png',
  },
  {
    name: 'msi',
    imageSrc: '/images/brand-8-removebg-preview.png',
  },
  {
    name: 'dell',
    imageSrc: '/images/brand-9-removebg-preview.png',
  },
  {
    name: 'lenovo',
    imageSrc: '/images/brand-10-removebg-preview.png',
  },
  {
    name: 'anker',
    imageSrc: '/images/brand-11-removebg-preview.png',
  },
]

const sampleFilters: IProductFilterProps['filters'] = [
  {
    type: 'image',
    title: 'Nhu Cầu',
    name: 'demand',
    imageOptions: [
      { src: '/images/filter-1.jpeg', label: 'Chơi game', value: 'game' },
      { src: '/images/filter-2.jpeg', label: 'Chụp ảnh', value: 'camera' },
      { src: '/images/filter-3.jpeg', label: 'Pin khủng', value: 'battery' },
      { src: '/images/filter-4.jpeg', label: 'Xem phim', value: 'screen' },
    ],
  },
  {
    type: 'range',
    title: 'Giá tiền',
    name: 'price',
    rangeOptions: {
      min: 0,
      max: 1000000000,
      values: [0, 1000000000],
    }
  },
  {
    type: 'color',
    title: 'Màu sắc',
    name: 'color',
    colorOptions: [
      { code: redGradientColor, value: 'Đỏ' },
      { code: greenGradientColor, value: 'Xanh lá' },
      { code: blueGradientColor, value: 'Xanh dương' },
      { code: yellowGradientColor, value: 'Vàng' },
      { code: blackGradientColor, value: 'Đen' },
      { code: whiteGradientColor, value: 'Trắng' },
    ],
  },
  {
    type: 'check',
    title: 'Bộ nhớ RAM',
    name: 'ram',
    checkOptions: [
      { label: '2 GB', value: '2' },
      { label: '4 GB', value: '4' },
      { label: '6 GB', value: '6' },
      { label: '8 GB', value: '8' },
      { label: '12 GB', value: '12' },
      { label: '16 GB', value: '16' },
    ],
  },
  {
    type: 'check',
    title: 'Bộ nhớ ROM',
    name: 'rom',
    checkOptions: [
      { label: '16 GB', value: '16' },
      { label: '32 GB', value: '32' },
      { label: '64 GB', value: '64' },
      { label: '128 GB', value: '128' },
      { label: '256 GB', value: '256' },
      { label: '512 GB', value: '512' },
    ],
  },
  {
    type: 'check',
    title: 'Tiêu chí khác',
    name: 'other',
    checkOptions: [
      { label: 'Giảm giá', value: 'Giảm giá' },
      { label: 'Nổi bật', value: 'Nổi bật' },
      { label: 'Hỗ trợ 5G', value: 'Hỗ trợ 5G' },
      { label: 'Kháng nước', value: 'Kháng nước' },
      { label: 'Sạc nhanh', value: 'Sạc nhanh' },
      { label: 'Live stream', value: 'Live stream' },
    ],
  },
]


const sampleTags = [
  { label: 'Bàn phím', value: 'Bàn phím' },
  { label: 'Chuột', value: 'Chuột' },
  { label: 'Màn hình vi tính', value: 'Màn hình vi tính' },
  { label: 'Tai nghe', value: 'Tai nghe' },
  { label: 'Loa bluetooth', value: 'Loa bluetooth' },
  { label: 'Ốp lưng', value: 'Ốp lưng' },
  { label: 'Camera', value: 'Camera' },
  { label: 'Gậy sellfie', value: 'Gậy sellfie' },
  { label: 'Giá đỡ điện thoại', value: 'Giá đỡ điện thoại' },
  { label: 'Micro', value: 'Micro' },
  { label: 'USB', value: 'USB' },
  { label: 'Cáp sạc', value: 'Cáp sạc' },
  { label: 'Củ sạc', value: 'Củ sạc' },
  { label: 'Sạc dự phòng', value: 'Sạc dự phòng' },
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
          <ProductProvider>
            <ProductFilter
              filters={sampleFilters}
              applyButton='Áp Dụng'
              resetButton='Đặt Lại'
              currencyLocales={currency.locales}
              currencyCode={currency.code}
            />
            <div className={styles._grid}>
              <ProductTool />
              <ProductGrid />
            </div>
          </ProductProvider>
        </div>
      </section>
    </main>
  )
}

export default Shop