'use client'
import { ChangeEvent, FC, ReactElement, ReactNode, memo, useRef, useState } from 'react'
import styles from '@/components/forms/textfield.module.sass'

interface TextFieldProps {
  width?: number | string
  height?: number | string
  background?: string
  border?: string
  borderRadius?: number
  boxShadow?: string
  type?: 'text' | 'email' | 'number' | 'date' | 'month'
  label?: string
  labelWidth?: number
  labelHeight?: number
  labelPadding?: number | string
  labelBorder?: string
  labelBorderRadius?: number | string
  labelBackground?: string
  labelTextColor?: string
  labelTextSize?: number
  labelTextWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  labelIcon?: ReactNode | ReactElement
  labelIconColor?: string
  labelIconSize?: number
  value?: string | number
  placeholder?: string
  padding?: string
  textSize?: number
  textWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  textColor?: string
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
  focusBorder?: string
  onChange: (value: string) => void
}

const TextField: FC<TextFieldProps> = ({
  width = 250,
  height = 45,
  background = 'rgba(255, 255, 255)',
  border = '1px solid rgba(39, 142, 255, 0.15)',
  borderRadius = 3,
  boxShadow,
  padding = '0 10px',
  type = 'text',
  label,
  labelWidth,
  labelHeight,
  labelPadding = '1px 5px',
  labelBorder,
  labelBorderRadius = 2,
  labelBackground = 'rgb(39, 142, 255)',
  labelTextColor = 'rgba(255, 255, 255)',
  labelTextSize = 12,
  labelTextWeight,
  labelIcon,
  labelIconColor,
  labelIconSize,
  value,
  placeholder,
  textSize = 15,
  textWeight,
  textColor,
  textAlign = 'start',
  focusBorder = '1px solid rgb(39, 142, 255)',
  onChange
}) => {
  const [inputValue, setInputValue] = useState<string | number>(value || '')
  const textFieldRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange(newValue)
  }

  return (
    <div
      className={styles._container}
      style={{
        width: width,
        height: height,
        background: background,
        border: border,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
      }}
      ref={textFieldRef}
    >
      {label && (
        <label
          style={{
            width: labelWidth,
            height: labelHeight,
            padding: labelPadding,
            background: labelBackground,
            fontSize: labelTextSize,
            fontWeight: labelTextWeight,
            color: labelTextColor,
            border: labelBorder,
            borderRadius: labelBorderRadius,
            left: 10,
            top: labelHeight ? -(labelHeight / 2) : -8.2,
          }}
        >
          {labelIcon && (
            <span
              style={{
                fontSize: labelIconSize,
                color: labelIconColor,
              }}
            >
              {labelIcon}
            </span>
          )}
          {label}
        </label>
      )}
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        style={{
          padding: padding,
          fontSize: textSize,
          fontWeight: textWeight,
          textAlign: textAlign,
          color: textColor,
          borderRadius: borderRadius,
        }}
        onChange={handleInputChange}
        onFocus={event => {
          focusBorder && (textFieldRef.current!.style.border = focusBorder)
        }}
        onBlur={event => {
          border && (textFieldRef.current!.style.border = border)
        }}
      />
    </div>
  )
}

export default memo(TextField)
