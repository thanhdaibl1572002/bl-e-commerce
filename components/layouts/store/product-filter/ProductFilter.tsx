/* eslint-disable @next/next/no-img-element */
'use client'
import { FC, memo, useState } from 'react'
import styles from '@/components/layouts/store/product-filter/product-filter.module.sass'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { blackGradientColor, blueGradientColor, getColorLevel, greenGradientColor, mainColor, redGradientColor, whiteColor, whiteGradientColor, yellowGradientColor } from '@/variables/variables'
import { useTranslation } from '@/languages'
import { useAppSelector } from '@/redux'


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
type RangeOption = { max: number, min: number, step: number, isRange: true }
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
        <div className={styles._range}></div>
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
  price = { max: 1, min: 100, step: 1, isRange: true },
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

//   const [selectedOptions, setSelectedOptions] = useState<string[]>([])

//   const handleOptionChange = (value: string) => {
//     const newSelectedOptions = selectedOptions.includes(value)
//       ? selectedOptions.filter((option) => option !== value)
//       : [...selectedOptions, value]
//     setSelectedOptions(newSelectedOptions)
//     onChange && onChange(newSelectedOptions)
//   }

//   return (
//     <div className={styles._item}>
//       <h3 className={styles._title}>{title}</h3>
//       <ul className={styles[isColor ? '_is__color__options' : '_options']}>
//         {options && options.length > 0 && options.map((option, index) => (
//           isColor ? (
//             <li
//               className={styles._color}
//               key={index}
//               style={{
//                 background: option.value,
//                 color: option.isWhiteColor ? mainColor : whiteColor,
//                 border: option.isWhiteColor ? `1px solid ${getColorLevel(mainColor, 20)}` : 'none'
//               }}
//               title={option.label}
//               onClick={() => handleOptionChange(option.label)}
//             >
//               {selectedOptions.find(selectedOption => selectedOption === option.label) && <IoCheckmarkOutline />}
//             </li>
//           ) : (
//             <li
//               key={index}
//               onClick={() => handleOptionChange(option.label)}
//             >
//               <div className={styles[selectedOptions.find(selectedOption => selectedOption === option.value) ? '_checked' : '_check']}>
//                 {selectedOptions.find(selectedOption => selectedOption === option.value) && <IoCheckmarkOutline />}
//               </div>
//               <div className={styles._label}>{option.label}</div>
//             </li>
//           )
//         ))}
//       </ul>
//     </div>
//   )
// }

// const ProductFilter: FC<IProductFilterProps> = ({
//   colors = [
//     { label: 'Đen', value: blackGradientColor },
//     { label: 'Đỏ', value: redGradientColor },
//     { label: 'Xanh lá', value: greenGradientColor },
//     { label: 'Xanh dương', value: blueGradientColor },
//     { label: 'Vàng', value: yellowGradientColor },
//     { label: 'Trắng', value: whiteGradientColor, isWhiteColor: true },
//   ],
//   categories= [
//     { label: '', value: '' },
//     { label: '', value: '' },
//     { label: '', value: '' },
//     { label: '', value: '' },
//   ],
//   materials = [
// { label: 'Bông', value: 'Bông' },
// { label: 'Nhung', value: 'Nhung' },
// { label: 'Len', value: 'Len' },
// { label: 'Lụa', value: 'Lụa' },
// { label: 'Lanh', value: 'Lanh' },
// { label: 'Cây dương', value: 'Cây dương' },
//   ],
//   types = [
// { label: 'Ghế tựa tay', value: 'Ghế tựa tay' },
// { label: 'Ghế bàn làm việc', value: 'Ghế bàn làm việc' },
// { label: 'Ghế ăn', value: 'Ghế ăn' },
// { label: 'Ghế cánh', value: 'Ghế cánh' },
// { label: 'Ghế nhựa', value: 'Ghế nhựa' },
// { label: 'Ghế vỏ trai', value: 'Ghế vỏ trai' },
//   ],
//   brands = [
// { label: 'Steelcase', value: 'Steelcase' },
// { label: 'Wood Swing', value: 'Wood Swing' },
// { label: 'American Becker', value: 'American Becker' },
// { label: 'Daz Chairs', value: 'Daz Chairs' },
// { label: 'Furniture Heritage', value: 'Furniture Heritage' },
//   ],
//   onChange,
// }) => {

//   const [currentValues, setCurrentValues] = useState<IFilterValues>({
//     colors: [],
//     materials: [],
//     types: [],
//     brands: [],
//   })

//   const handleChange = (values: Array<string>, key: keyof IFilterValues): void => {
//     setCurrentValues(prevValues => ({ ...prevValues, [key]: values }))
//     onChange && onChange({ ...currentValues, [key]: values })
//   }

//   return (
//     <div className={styles._container}>
//       <div className={styles._list}>
// <OptionList title='Màu sắc' options={colors || []} isColor onChange={values => handleChange(values, 'colors')} />
// <OptionList title='Chất liệu' options={materials || []} onChange={values => handleChange(values, 'materials')} />
// <OptionList title='Kiểu dáng' options={types || []} onChange={values => handleChange(values, 'types')} />
// <OptionList title='Nhãn hiệu' options={brands || []} onChange={values => handleChange(values, 'brands')} />
//       </div>
//       <div className={styles._actions}></div>
//     </div>
//   )
// }

// export default memo(ProductFilter)

