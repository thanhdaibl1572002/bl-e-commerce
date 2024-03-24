'use client'
import { FC, ReactElement, ReactNode, memo, useState, useRef, InputHTMLAttributes } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import styles from '@/components/forms/text-field/text-field.module.sass'
import { getColorLevel, mainColor, whiteColor } from '@/variables/variables'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  textFieldWidth?: number | string
  textFieldHeight?: number | string
  textFieldInputWidth?: number | string
  textFieldInputHeight?: number | string
  textFieldBackground?: string
  textFieldTextSize?: number | string
  textFieldTextColor?: string
  textFieldBorder?: string
  textFieldBorderRadius?: number | string
  textFieldPadding?: number | string
  textFieldLabel?: string
  textFieldLabelBackground?: string,
  textFieldLabelColor?: string,
  textFieldLabelIcon?: ReactNode | ReactElement
  textFieldLabelIconColor?: string,
  textFieldType?: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'month'
  textFieldId?: string
  textFieldName?: string
  textFieldPlaceholder?: string
  textFieldDefaultValue?: string | number
  textFieldErrorMessage?: string
  textFieldErrorMessageIcon?: ReactNode | ReactElement
  textFieldTogglePasswordIconSize?: number
  textFieldToggleShowPassword?: boolean
  textFieldClassName?: string
}

const TextField: FC<TextFieldProps> = ({
  textFieldWidth = 'fit-content',
  textFieldHeight = 'fit-content',
  textFieldInputWidth = '100%',
  textFieldInputHeight = 45,
  textFieldBackground,
  textFieldTextSize = 15,
  textFieldTextColor,
  textFieldBorder,
  textFieldBorderRadius,
  textFieldPadding,
  textFieldLabel,
  textFieldLabelBackground = whiteColor,
  textFieldLabelColor = mainColor,
  textFieldLabelIcon,
  textFieldLabelIconColor = mainColor,
  textFieldType = 'text',
  textFieldId,
  textFieldName,
  textFieldPlaceholder,
  textFieldDefaultValue,
  textFieldErrorMessage,
  textFieldErrorMessageIcon,
  textFieldToggleShowPassword = false,
  textFieldTogglePasswordIconSize = 20,
  textFieldClassName,
  ...rest
}) => {

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const className = `${styles._container} ${textFieldClassName || ''}`.trim()

  return (
    <div 
      className={className} 
      style={{
        width: textFieldWidth,
        height: textFieldHeight,
      }}
    >
      {textFieldLabel && 
      <label 
        htmlFor={textFieldId}
        style={{
          background: textFieldLabelBackground,
          color: textFieldLabelColor,
        }}
        >
          {textFieldLabelIcon && <span style={{ color: textFieldLabelIconColor }}>{textFieldLabelIcon}</span>}{textFieldLabel}
        </label>
      }
      <div className={styles._input}>
        <input
          type={textFieldType === 'password' && isShowPassword ? 'text' : textFieldType}
          id={textFieldId}
          name={textFieldName}
          placeholder={textFieldPlaceholder}
          defaultValue={textFieldDefaultValue}
          ref = {inputRef}
          onFocus={() => {
            if (inputRef.current) 
              inputRef.current.style.border = `1px solid ${getColorLevel(mainColor, 100)}`
          }}
          onBlur={() => {
            if (inputRef.current) 
              inputRef.current.style.border = `1px solid ${getColorLevel(mainColor, 20)}`
          }}
          style={{
            background: textFieldBackground,
            width: textFieldInputWidth,
            height: textFieldInputHeight,
            borderRadius: textFieldBorderRadius,
            border: textFieldBorder,
            fontSize: textFieldTextSize,
            color: textFieldTextColor,
          }}
          {...rest}
        />
        {textFieldToggleShowPassword && textFieldType === 'password' && (
          <div 
            className={styles._show__password}
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword 
            ? <IoEyeOutline style={{ fontSize: textFieldTogglePasswordIconSize }}/> 
            : <IoEyeOffOutline style={{ fontSize: textFieldTogglePasswordIconSize }}/>}
          </div>
        )}
      </div>
      {textFieldErrorMessage && (
        <span>{textFieldErrorMessageIcon && textFieldErrorMessageIcon}{textFieldErrorMessage}</span>
      )}
      
    </div>
  )
}

export default memo(TextField)