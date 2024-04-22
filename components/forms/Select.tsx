'use client'
import { CSSProperties, FC, ReactElement, ReactNode, memo, useEffect, useRef, useState } from 'react'
import styles from '@/components/forms/select.module.sass'
import { IoChevronDownOutline, IoGlobeOutline } from 'react-icons/io5'

interface SelectItemCssProperties extends CSSProperties {
  '--item-hover-background': string
  '--item-hover-text-color': string
  '--item-hover-icon-color': string
}

interface Option {
  label: string
  value: string
  icon?: ReactNode | ReactElement
}

export interface SelectProps {
  options: Option[]
  width?: number | string
  height?: number | string
  background?: string
  border?: string
  borderRadius?: number | string
  boxShadow?: string
  padding?: string
  selectedBackground?: string
  selectedBoxShadow?: string
  selectedBorder?: string
  selectedTextSize?: number
  selectedTextColor?: string
  selectedTextWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  selectedIconSize?: number
  selectedIconColor?: string
  selectedArrowSize?: number
  selectedArrowColor?: string
  itemHeight?: number
  itemBackground?: string
  itemTextSize?: number
  itemTextColor?: string
  itemTextWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  itemIconSize?: number
  itemIconColor?: string
  itemArrowSize?: number
  itemArrowColor?: string
  itemHoverBackground?: string
  itemHoverTextColor?: string
  itemHoverIconColor?: string
  listMaxHeight?: number
  listBackground?: string
  listBorder?: string
  listBoxShadow?: string
  className?: string
  onChange: (selectedValue: string) => void
}

const Select: FC<SelectProps> = ({
  options,
  width = 150,
  height = 40,
  background,
  borderRadius = 3,
  padding = '0 10px',
  selectedBackground,
  selectedBoxShadow,
  selectedBorder = '1px solid rgba(39, 142, 255, 0.15)',
  selectedTextSize = 15,
  selectedTextColor,
  selectedTextWeight,
  selectedIconSize = 20,
  selectedIconColor = 'rgb(39, 142, 255)',
  selectedArrowSize = 15,
  selectedArrowColor = 'rgb(39, 142, 255)',
  itemHeight = 35,
  itemBackground,
  itemTextSize = 15,
  itemTextColor,
  itemTextWeight,
  itemIconSize = 20,
  itemIconColor = 'rgb(39, 142, 255)',
  itemHoverBackground = 'rgba(39, 142, 255, 0.15)',
  itemHoverTextColor = 'rgb(39, 142, 255)',
  itemHoverIconColor = 'rgb(39, 142, 255)',
  listMaxHeight = 210,
  listBackground,
  listBorder = '1px solid rgba(39, 142, 255, 0.15)',
  listBoxShadow,
  className,
  onChange
}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')
  const selectRef = useRef<HTMLDivElement>(null)

  const seletedLabel = options.find(option => option.value === selectedValue)?.label
  const seletedIcon = options.find(option => option.value === selectedValue)?.icon

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    onChange(value)
    setIsOpen(false)
  }

  const itemStyles: SelectItemCssProperties = {
    minHeight: itemHeight,
    background: itemBackground,
    padding: padding,
    fontSize: itemTextSize,
    fontWeight: itemTextWeight,
    color: itemTextColor,
    '--item-hover-background': itemHoverBackground,
    '--item-hover-text-color': itemHoverTextColor,
    '--item-hover-icon-color': itemHoverIconColor,
  }

  return (
    <div
      className={`${styles._container} ${className || ''}`.trim()}
      style={{
        width: width,
        height: height,
        background: background,
      }}
      ref={selectRef}
    >
      <div
        className={styles._selected}
        style={{
          background: selectedBackground,
          borderRadius: borderRadius,
          border: selectedBorder,
          boxShadow: selectedBoxShadow,
          padding: padding,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong
          style={{
            fontSize: selectedTextSize,
            fontWeight: selectedTextWeight,
            color: selectedTextColor,
          }}
        >
          <span
            style={{
              fontSize: selectedIconSize,
              color: selectedIconColor,
            }}
          >
            {seletedIcon || options[0].icon}
          </span>
          {seletedLabel || options[0].label}
        </strong>
        <IoChevronDownOutline
          style={{
            fontSize: selectedArrowSize,
            color: selectedArrowColor,
          }}
        />
      </div>
      {isOpen && (
        <ul
          style={{
            background: listBackground,
            border: listBorder,
            borderRadius: borderRadius,
            boxShadow: listBoxShadow,
            maxHeight: listMaxHeight,
          }}
        >
          {options.map(option => (
            <li
              key={option.value}
              style={itemStyles}
              onClick={() => handleSelect(option.value)}
            >
              {option.icon && (
                <span
                  style={{
                    fontSize: itemIconSize,
                    color: itemIconColor,
                  }}
                >
                  {option.icon}
                </span>
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(Select)
