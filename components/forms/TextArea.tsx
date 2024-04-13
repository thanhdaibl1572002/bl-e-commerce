'use client'
import { ChangeEvent, FC, ReactElement, ReactNode, memo, useRef, useState } from 'react'
import styles from '@/components/forms/textarea.module.sass'

interface TextAreaProps {
    width?: number | string
    height?: number | string
    background?: string
    border?: string
    borderRadius?: number
    boxShadow?: string
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
    value?: string
    placeholder?: string
    placeholderStyles?: {
        color?: string
        fontSize?: number
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    }
    padding?: string
    textSize?: number
    textWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    textColor?: string
    focusBorder?: string
    onChange: (value: string) => void
}

const TextArea: FC<TextAreaProps> = ({
    width = 250,
    height = 120,
    background = 'rgba(255, 255, 255)',
    border = '1px solid rgba(39, 142, 255, 0.15)',
    borderRadius = 3,
    boxShadow,
    padding = 12,
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
    focusBorder = '1px solid rgb(39, 142, 255)',
    onChange
}) => {
    const [textValue, setTextValue] = useState<string>(value || '')
    const textAreaRef = useRef<HTMLDivElement>(null)

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value
        setTextValue(newValue)
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
              ref={textAreaRef}
        >
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
            <textarea
                value={textValue}
                placeholder={placeholder}
                style={{
                    padding: padding,
                    fontSize: textSize,
                    fontWeight: textWeight,
                    color: textColor,
                    borderRadius: borderRadius,
                }}
                onChange={handleTextChange}
                onFocus={event => {
                    focusBorder && (textAreaRef.current!.style.border = focusBorder)
                }}
                onBlur={event => {
                    border && (textAreaRef.current!.style.border = border)
                }}
            />
        </div>
    )
}

export default memo(TextArea)
