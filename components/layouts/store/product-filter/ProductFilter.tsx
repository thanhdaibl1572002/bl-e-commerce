/* eslint-disable @next/next/no-img-element */
'use client'
import { FC, memo, useState } from 'react'
import styles from '@/components/layouts/store/product-filter/product-filter.module.sass'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { blackGradientColor, blueGradientColor, greenGradientColor, redGradientColor, whiteGradientColor, yellowGradientColor } from '@/variables/variables'
import { useTranslation } from '@/languages'
import { useAppSelector } from '@/redux'
import DoubleRange from '@/components/forms/DoubleRange'


interface IFilterValues {
  categories: Array<string>
  colors: Array<string>
  materials: Array<string>
  types: Array<string>
  brands: Array<string>
  price: { max: number, min: number }
}

type ColorOption = { code: string, value: string, isColor: true }
type CheckOption = { label: string, value: string, isCheck: true }
type RangeOption = { max: number, min: number, step?: number, isRange: true }
type ImageOption = { label: string, value: string, src: string, isImage: true }

interface IOptionListProps {
  title: string
  options: Array<ColorOption> | Array<CheckOption> | Array<ImageOption> | RangeOption
  onChange?: (values: Array<keyof IFilterValues>) => void
}

const OptionList: FC<IOptionListProps> = ({ title, options, onChange }) => {
  const renderOptions = (): JSX.Element | null => {
    if (Array.isArray(options) && options.length > 0) {
      return (
        <ul className={styles._options}>
          {options.map((option, optionIndex) => {
            if ('isColor' in option) {
              return (
                <li 
                  key={optionIndex} 
                  className={styles._color} 
                  style={{ background: option.code }}
                >
                  <IoCheckmarkOutline />
                </li>
              )
            }
            if ('isCheck' in option) {
              return (
                <li 
                  key={optionIndex}
                  className={styles._check} 
                >
                  <IoCheckmarkOutline />
                  {option.label}
                </li>
              )
            }
            if ('isImage' in option) {
              return (
                <li className={styles._image} key={optionIndex}>
                  <img src={option.src} alt={option.label} />
                </li>
              )
            }
            return null
          })}
        </ul>
      )
    } else if ('isRange' in options) {
      const { min, max, step } = options
      return (
        <div className={styles._range}>
          <DoubleRange 
            doubleRangeMinValue={min} 
            doubleRangeMaxValue={max}
            doubleRangeStep={step}
          />
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className={styles._item}>
      <h3 className={styles._title}>{title}</h3>
      {renderOptions()}
    </div>
  )
}


interface IProductFilterProps {
  categories?: Array<ImageOption>
  colors?: Array<ColorOption>
  materials?: Array<CheckOption>
  types?: Array<CheckOption>
  brands?: Array<CheckOption>
  price?: RangeOption
  onChange?: (values: IFilterValues) => void
}

const ProductFilter: FC<IProductFilterProps> = ({
  categories = [
    { label: 'Ghế nội thất', value: 'Ghế nội thất', src: '/category-1.jpeg', isImage: true },
    { label: 'Ghế văn phòng', value: 'Ghế văn phòng', src: '/category-2.jpeg', isImage: true },
    { label: 'Bàn làm việc', value: 'Bàn làm việc', src: '/category-3.jpeg', isImage: true },
    { label: 'Kệ sách', value: 'Kệ sách', src: '/category-4.jpeg', isImage: true },
  ],
  colors = [
    { code: blackGradientColor, value: 'Đen', isColor: true },
    { code: redGradientColor, value: 'Đỏ', isColor: true },
    { code: greenGradientColor, value: 'Xanh lá', isColor: true },
    { code: blueGradientColor, value: 'Xanh dương', isColor: true },
    { code: yellowGradientColor, value: 'Vàng', isColor: true },
    { code: whiteGradientColor, value: 'Trắng', isColor: true },
  ],
  materials = [
    { label: 'Bông', value: 'Bông', isCheck: true },
    { label: 'Nhung', value: 'Nhung', isCheck: true },
    { label: 'Len', value: 'Len', isCheck: true },
    { label: 'Lụa', value: 'Lụa', isCheck: true },
    { label: 'Lanh', value: 'Lanh', isCheck: true },
    { label: 'Cây dương', value: 'Cây dương', isCheck: true },
  ],
  types = [
    { label: 'Ghế tựa tay', value: 'Ghế tựa tay', isCheck: true },
    { label: 'Ghế bàn làm việc', value: 'Ghế bàn làm việc', isCheck: true },
    { label: 'Ghế ăn', value: 'Ghế ăn', isCheck: true },
    { label: 'Ghế cánh', value: 'Ghế cánh', isCheck: true },
    { label: 'Ghế nhựa', value: 'Ghế nhựa', isCheck: true },
    { label: 'Ghế vỏ trai', value: 'Ghế vỏ trai', isCheck: true },
  ],
  brands = [
    { label: 'Steelcase', value: 'Steelcase', isCheck: true },
    { label: 'Wood Swing', value: 'Wood Swing', isCheck: true },
    { label: 'American Becker', value: 'American Becker', isCheck: true },
    { label: 'Daz Chairs', value: 'Daz Chairs', isCheck: true },
    { label: 'Furniture Heritage', value: 'Furniture Heritage', isCheck: true },
  ],
  price = { min: 1, max: 100, isRange: true },
  onChange,
}) => {

  const theme = useAppSelector(state => state.theme.value)
  console.log(theme)

  const [t, i18n] = useTranslation()

  return (
    <div className={styles[`_container__${theme}`]}>
      <div className={styles._list}>
        <OptionList title={t('products.filter.categories.title')} options={categories} />
        <OptionList title={t('products.filter.colors.title')} options={colors} />
        <OptionList title={t('products.filter.price.title')} options={price} />
        <OptionList title={t('products.filter.materials.title')} options={materials} />
        <OptionList title={t('products.filter.types.title')} options={types} />
        <OptionList title={t('products.filter.brands.title')} options={brands} />
      </div>
    </div>
  )
}

export default ProductFilter
