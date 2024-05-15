'use client'
import { FC, memo, useState } from 'react'
import styles from '@/app/detail/[id]/detailtopinfo.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from 'react-icons/io5'
import { PiHandbag, PiHeartStraightLight, PiMinus, PiPlus } from 'react-icons/pi'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'
import Button from '@/components/forms/Button'
import TextField from '@/components/forms/TextField'
import ThemeButton from '@/components/themes/ThemeButton'

export interface IVariantItemProps {
  title: string
  type: 'color' | 'check'
  options: Array<{
    code?: string
    value: string | number
    label?: string
  }>,
  onChange: (selectedValue: string | number) => void
}

const VariantItem: FC<IVariantItemProps> = memo(({
  title,
  type = 'check',
  options,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>()
  const handleSelect = (value: string | number): void => {
    setSelectedValue(value)
    onChange(value)
  }
  return (
    <li className={styles._variant}>
      <strong>{title}</strong>
      <ul>
        {options && options.length > 0 && options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleSelect(option.value)}
            className={selectedValue === option.value ? `${styles[`_${type}`]} ${styles._active}` : styles[`_${type}`]}
          >
            {type === 'check' && option.label}
            {type === 'color' && <span style={{ background: option.code }}></span>}
          </li>
        ))}
      </ul>
    </li>
  )
})
VariantItem.displayName = 'VariantItem'

export interface IDetailTopInfoProps {
  name: string
  rating: number
  ratingCount: number
  discountPercentage?: number
  currentPrice: number
  features?: Array<string>
  variants?: Array<{
    type: 'color' | 'check',
    title: string,
    name: string,
    options: IVariantItemProps['options'],
  }>
  cartButton: string
}

const DetailTopInfo: FC<IDetailTopInfoProps> = ({
  name,
  rating,
  ratingCount,
  discountPercentage = 0,
  currentPrice,
  features,
  variants,
  cartButton,
}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)

  const formatCurrentPrice = new Intl.NumberFormat(currency.locales, { style: 'currency', currency: currency.code }).format(currentPrice)
  const formatOriginalPrice = new Intl.NumberFormat(currency.locales, { style: 'currency', currency: currency.code }).format(discountPercentage !== 0 ? currentPrice / (1 - discountPercentage / 100) : currentPrice)

  return (
    <div className={styles[`_container__${theme}`]}>
      <h1>{name}</h1>
      <ul className={styles._reviews}>
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index}>
            {index < Math.floor(rating) ? (
              <IoStarSharp />
            ) : index < rating ? (
              <IoStarHalfSharp />
            ) : (
              <IoStarOutline />
            )}
          </li>
        ))}
        <li>({ratingCount})</li>
      </ul>
      <ul className={styles._features}>
        {features && features.length > 0 && features.slice(0, 4).map((feature, index) => (
          <li key={index}><span>&#x25CF;</span> {feature}</li>
        ))}
      </ul>
      <div className={styles._prices}>{formatCurrentPrice}<span>{formatOriginalPrice}</span></div>
      <ul className={styles._variants}>
        {variants && variants.length > 0 && variants.map((variant, index) => (
          <VariantItem
            key={index}
            title={variant.title}
            type={variant.type}
            options={variant.options}
            onChange={value => console.log(value)}
          />
        ))}
      </ul>
      <div className={styles._quantity}>
        <Button
          width={38}
          height={38}
          className={styles._prev}
          icon={<PiMinus />}
          iconSize={20}
          iconColor={themeColors[theme]}
          background={whiteColor}
          boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
          bubbleColor={themeColors[theme]}
        />
        <TextField
          width={55}
          height={38}
          border={`1px solid ${getColorLevel(themeColors[theme], 10)}`}
          borderRadius={5}
          focusBorder={`1px solid ${themeColors[theme]}`}
          type={'number'}
          textAlign={'center'}
          value={1}
          onChange={value => console.log(value)}
        />
        <Button
          width={38}
          height={38}
          className={styles._next}
          icon={<PiPlus />}
          iconSize={20}
          iconColor={themeColors[theme]}
          background={whiteColor}
          boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
          bubbleColor={themeColors[theme]}
        />
      </div>
      <div className={styles._buttons}>
        <ThemeButton
          theme={theme}
          width={'fit-content'}
          height={45}
          textSize={16}
          text={cartButton}
          icon={<PiHandbag />}
          iconSize={24}
          animateDuration={600}
          boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 30)}`}
        />
        <Button
          width={45}
          height={45}
          icon={<PiHeartStraightLight />}
          iconSize={25}
          iconColor={themeColors[theme]}
          background={whiteColor}
          animateDuration={300}
          boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
          bubbleColor={themeColors[theme]}
        />
      </div>
    </div>
  )
}

export default DetailTopInfo