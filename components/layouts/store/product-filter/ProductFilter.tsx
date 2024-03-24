'use client'
import { FC, memo, useState } from 'react'
import styles from '@/components/layouts/store/product-filter/product-filter.module.sass'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { blackGradientColor, blueGradientColor, getColorLevel, greenGradientColor, mainColor, redGradientColor, whiteColor, whiteGradientColor, yellowGradientColor } from '@/variables/variables'

interface IOption {
  label: string
  value: string
  isWhiteColor?: boolean
}

interface IFilterValues {
  colors: Array<string>
  materials: Array<string>
  types: Array<string>
  brands: Array<string>
}

interface IProductFilterProps {
  colors?: Array<IOption>
  materials?: Array<IOption>
  types?: Array<IOption>
  brands?: Array<IOption>
  onChange?: (values: IFilterValues) => void
}

interface IOptionListProps {
  title: string
  options: Array<IOption>
  isColor?: boolean
  onChange?: (values: Array<string>) => void
}

const OptionList: FC<IOptionListProps> = ({
  title,
  options,
  isColor,
  onChange,
}) => {

  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionChange = (value: string) => {
    const newSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value]
    setSelectedOptions(newSelectedOptions)
    onChange && onChange(newSelectedOptions)
  }

  return (
    <div className={styles._item}>
      <h3 className={styles._title}>{title}</h3>
      <ul className={styles[isColor ? '_is__color__options' : '_options']}>
        {options && options.length > 0 && options.map((option, index) => (
          isColor ? (
            <li
              className={styles._color}
              key={index}
              style={{
                background: option.value,
                color: option.isWhiteColor ? mainColor : whiteColor,
                border: option.isWhiteColor ? `1px solid ${getColorLevel(mainColor, 20)}` : 'none'
              }}
              title={option.label}
              onClick={() => handleOptionChange(option.label)}
            >
              {selectedOptions.find(selectedOption => selectedOption === option.label) && <IoCheckmarkOutline />}
            </li>
          ) : (
            <li
              key={index}
              onClick={() => handleOptionChange(option.label)}
            >
              <div className={styles[selectedOptions.find(selectedOption => selectedOption === option.value) ? '_checked' : '_check']}>
                {selectedOptions.find(selectedOption => selectedOption === option.value) && <IoCheckmarkOutline />}
              </div>
              <div className={styles._label}>{option.label}</div>
            </li>
          )
        ))}
      </ul>
    </div>
  )
}

const ProductFilter: FC<IProductFilterProps> = ({
  colors = [
    { label: 'Đen', value: blackGradientColor },
    { label: 'Đỏ', value: redGradientColor },
    { label: 'Xanh lá', value: greenGradientColor },
    { label: 'Xanh dương', value: blueGradientColor },
    { label: 'Vàng', value: yellowGradientColor },
    { label: 'Trắng', value: whiteGradientColor, isWhiteColor: true },
  ],
  materials = [
    { label: 'Bông', value: 'Bông' },
    { label: 'Nhung', value: 'Nhung' },
    { label: 'Len', value: 'Len' },
    { label: 'Lụa', value: 'Lụa' },
    { label: 'Lanh', value: 'Lanh' },
    { label: 'Cây dương', value: 'Cây dương' },
  ],
  types = [
    { label: 'Ghế tựa tay', value: 'Ghế tựa tay' },
    { label: 'Ghế bàn làm việc', value: 'Ghế bàn làm việc' },
    { label: 'Ghế ăn', value: 'Ghế ăn' },
    { label: 'Ghế cánh', value: 'Ghế cánh' },
    { label: 'Ghế nhựa', value: 'Ghế nhựa' },
    { label: 'Ghế vỏ trai', value: 'Ghế vỏ trai' },
  ],
  brands = [
    { label: 'Steelcase', value: 'Steelcase' },
    { label: 'Wood Swing', value: 'Wood Swing' },
    { label: 'American Becker', value: 'American Becker' },
    { label: 'Daz Chairs', value: 'Daz Chairs' },
    { label: 'Furniture Heritage', value: 'Furniture Heritage' },
  ],
  onChange, 
}) => {

  const [currentValues, setCurrentValues] = useState<IFilterValues>({
    colors: [],
    materials: [],
    types: [],
    brands: [],
  })

  const handleChange = (values: Array<string>, key: keyof IFilterValues): void => {
    setCurrentValues(prevValues => ({ ...prevValues, [key]: values }))
    onChange && onChange({ ...currentValues, [key]: values })
  }

  console.log(currentValues)

  return (
    <div className={styles._container}>
      <div className={styles._list}>
        <OptionList title="Màu sắc" options={colors || []} isColor onChange={values => handleChange(values, 'colors')} />
        <OptionList title="Chất liệu" options={materials || []} onChange={values => handleChange(values, 'materials')} />
        <OptionList title="Kiểu dáng" options={types || []} onChange={values => handleChange(values, 'types')} />
        <OptionList title="Nhãn hiệu" options={brands || []} onChange={values => handleChange(values, 'brands')} />
      </div>
      <div className={styles._actions}></div>
    </div>
  )
}

export default memo(ProductFilter)