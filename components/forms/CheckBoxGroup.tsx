'use client'
import { FC, memo, useState } from 'react'
import styles from '@/components/forms/checkboxgroup.module.sass'
import { IoCheckmarkOutline } from 'react-icons/io5'

interface Option {
  label: string
  value: string
}

interface CheckBoxGroupProps {
  options: Option[]
  width?: number | string
  height?: number | string
  columnGap?: number
  rowGap?: number
  itemMinWidth?: number
  itemGap?: number
  boxSize?: number
  boxBackground?: string
  checkSize?: number
  checkColor?: string
  checkedBoxBackground?: string
  checkedColor?: string
  textSize?: number
  textColor?: string
  textWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  border?: string
  borderRadius?: number | string
  onChange: (selectedValues: string[]) => void,
}

const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  options,
  width = 400,
  height,
  columnGap = 10,
  rowGap = 10,
  itemMinWidth = 150,
  itemGap = 5,
  boxSize = 16,
  boxBackground,
  checkSize = 13,
  checkColor = 'rgb(39, 142, 255)',
  checkedBoxBackground = 'rgb(39, 142, 255)',
  checkedColor,
  textSize = 15,
  textColor,
  textWeight,
  border = '1px solid rgba(39, 142, 255, 0.5)',
  borderRadius = 2.5,
  onChange
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleCheckboxChange = (optionValue: string) => {
    const newSelectedValues = selectedValues.includes(optionValue)
      ? selectedValues.filter(value => value !== optionValue)
      : [...selectedValues, optionValue]
    setSelectedValues(newSelectedValues)
    onChange(newSelectedValues)
  }

  return (
    <div
      className={styles._container}
      style={{
        width: width,
        height: height,
        columnGap: columnGap,
        rowGap: rowGap,
        gridTemplateColumns: `repeat(auto-fit, minmax(${itemMinWidth}px, 1fr))`
      }}
    >
      {options.map(option => {
        const isChecked = selectedValues.includes(option.value)
        return (
          <label
            key={option.value}
            style={{
              fontSize: textSize,
              fontWeight: textWeight,
              color: textColor,
              gap: itemGap,
            }}
          >
            <span 
              style={{
                width: boxSize,
                height: boxSize,
                background: isChecked ? checkedBoxBackground : boxBackground,
                fontSize: isChecked ? checkSize : 0,
                color: isChecked ? checkedColor : checkColor,
                border: isChecked ? 'none' : border,
                borderRadius: borderRadius,
              }}
            >
              <IoCheckmarkOutline />
            </span>
            <input
              type='checkbox'
              value={option.value}
              checked={isChecked}
              onChange={() => handleCheckboxChange(option.value)}
            />
            {option.label}
          </label>
        )
      })}
    </div>
  )
}

export default memo(CheckBoxGroup)
