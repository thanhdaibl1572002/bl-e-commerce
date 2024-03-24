import { FC, memo } from 'react'
import styles from '@/components/layouts/store/product-filter/product-filter.module.sass'
import { IoCheckboxOutline, IoCheckmark, IoCheckmarkOutline } from 'react-icons/io5'
import { blackGradientColor, blueGradientColor, getColorLevel, greenGradientColor, mainColor, redGradientColor, whiteColor, whiteGradientColor, yellowGradientColor } from '@/variables/variables'

interface IOption {
  label: string
  value: string
  isWhiteColor?: boolean
}

interface IProductFilterProps {
  colors?: IOption[]
  materials?: IOption[]
  types?: IOption[]
  brands?: IOption[]
}

const OptionList: FC<{ title: string, options: IOption[], isColor?: boolean }> = ({ title, options, isColor }) => (
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
          >
            {/* <IoCheckmarkOutline /> */}
          </li>
        ) : (
          <li key={index}>
            <div className={styles._check}>
              {/* <IoCheckmarkOutline /> */}
            </div>
            <div className={styles._label}>{option.label}</div>
          </li>
        )
      ))}
    </ul>
  </div>
)

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
  ], }) => {
  return (
    <div className={styles._container}>
      <div className={styles._list}>
        <OptionList title="Màu sắc" options={colors || []} isColor />
        <OptionList title="Chất liệu" options={materials || []} />
        <OptionList title="Kiểu dáng" options={types || []} />
        <OptionList title="Nhãn hiệu" options={brands || []} />
      </div>
      <div className={styles._actions}></div>
    </div>
  )
}

export default memo(ProductFilter)